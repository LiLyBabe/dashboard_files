import pandas as pd
import numpy as np
import json

def get_graph_data():

    loc = 'D:/Epay/Epay/MachineLearning/RecalculatePD/RecalibratePD.xlsm'

    df = pd.read_excel(loc, sheet_name = 'PD cal')

    df = df[['PD','Loan Amount', 'EV']]
    df = df.dropna().reset_index()
    df.rename(columns = {"PD": "x", "Loan Amount": "y", "EV": "z"}, inplace=True)
    result = df.to_json(orient = 'records')

    return json.loads(result)


if __name__ == '__main__': 
    json_file = get_graph_data()
    filePathName = 'D:/Epay/Epay/Dashboard/dashboard_files/' + 'NoLimitControl' + '.json'

    with open(filePathName, 'w') as fp:
        json.dump(json_file, fp)
