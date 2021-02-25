import numpy as np
import openpyxl 
import pandas as pd
import string
import json

wb = openpyxl.load_workbook('D:\Epay\Epay\Basel 2 - Portfolio Worst Case Losses.xlsx')

# wb1 = wb[wb.sheetnames[1]]

no_named_range = len(wb.defined_names.definedName)

named_range = []
for i in range(no_named_range):
    named_range.append(wb.defined_names.definedName[i].name)

def excel_to_df(table_name):
    sheet_name = list(wb.defined_names[table_name].destinations)[0][0]
    df = pd.DataFrame(wb[sheet_name].values)
    
    table_range = list(wb.defined_names[table_name].destinations)[0][1].replace('$','')
    table_range = table_range.split(":")

    col_lower_bound = string.ascii_uppercase.index(table_range[0][0])
    col_upper_bound = string.ascii_uppercase.index(table_range[1][0])

    row_lower_bound = int(table_range[0][1:])
    row_upper_bound = int(table_range[1][1:])

    df = df.iloc[row_lower_bound-1:row_upper_bound, col_lower_bound:col_upper_bound+1]

    return df

if __name__ == '__main__': 
    for i in named_range:
        js = excel_to_df(i)
        json_file = json.loads(js.to_json(orient = 'values'))
        filePathName = 'D:/Epay/Epay/Dashboard/dashboard_files/' + i + '.json'

        with open(filePathName, 'w') as fp:
            json.dump(json_file, fp)