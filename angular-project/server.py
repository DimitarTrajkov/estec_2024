from flask import Flask, jsonify
from flask_cors import CORS
import pandas as pd
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, r2_score

app = Flask(__name__)
CORS(app)

cached_result = []
random_forest_model = RandomForestRegressor(n_estimators=100,max_depth = 10, max_features = "sqrt", min_samples_leaf = 4, min_samples_split = 10,  random_state=42) 

def slow_function():
    data = pd.read_csv("gym_1.csv")
    X = data[['val']]
    y = data['target']
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    random_forest_model.fit(X_train, y_train)
    for x in range(24,96):
        p = x * 15
        hours = p // 60
        minutes = p % 60
        cached_result.append({"label": '{} {}'.format(f'{hours:02}',f'{minutes:02}'), "y": int(random_forest_model.predict([[x]]).tolist()[0])})

@app.route('/get_data', methods=['GET'])
def get_data():
    return cached_result

if __name__ == '__main__':
    slow_function()
    app.run(debug=True)
