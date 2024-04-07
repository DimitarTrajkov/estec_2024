from flask import Flask, request, jsonify
from flask_cors import CORS
from joblib import load

app = Flask(__name__)
CORS(app)

cached_result = []
random_forest_model1 = load('random_forest_model_1.joblib')
random_forest_model2 = load('random_forest_model_2.joblib')
random_forest_model3 = load('random_forest_model_3.joblib')
random_forest_model4 = load('random_forest_model_4.joblib')
random_forest_model5 = load('random_forest_model_5.joblib')
random_forest_model6 = load('random_forest_model_6.joblib')
random_forest_model7 = load('random_forest_model_7.joblib')


@app.route('/get_data', methods=['GET'])
def get_data():
    random_forest_model = []
    result = []
    match(int(request.args.get('param1'))):
        case 0: random_forest_model = random_forest_model7
        case 1: random_forest_model = random_forest_model1
        case 2: random_forest_model = random_forest_model2
        case 3: random_forest_model = random_forest_model3
        case 4: random_forest_model = random_forest_model4
        case 5: random_forest_model = random_forest_model5
        case 6: random_forest_model = random_forest_model6
    for x in range(24,96):
        p = x * 15
        result.append({"label": '{:02d}:{:02d}'.format(int(p/60),int(p%60)), "y": int(random_forest_model.predict([[x]]).tolist()[0])})
    return result

@app.route('/get_statistika_hours', methods=['GET'])
def get_statistika_hours():
    param1 = int(request.args.get('param1'))
    param2 = int(request.args.get('param2'))
    random_forest_model = []
    result = []
    match(int(request.args.get('param3'))):
        case 1: random_forest_model = random_forest_model1
        case 2: random_forest_model = random_forest_model2
        case 3: random_forest_model = random_forest_model3
        case 4: random_forest_model = random_forest_model4
        case 5: random_forest_model = random_forest_model5
        case 6: random_forest_model = random_forest_model6
        case 7: random_forest_model = random_forest_model7

    while(param1 < param2):
        result.append('{}:00 - {}'.format(param1,int(random_forest_model.predict([[param1*4]]).tolist()[0])))
        param1 = param1 + 1
    
    if(param1 == 24):
        result.append('00:00 - {}'.format(int(random_forest_model.predict([[param1*4]]).tolist()[0])))
    else:
        result.append('{}:00 - {}'.format(param1,int(random_forest_model.predict([[param1*4]]).tolist()[0])))

    return result

if __name__ == '__main__':
    app.run(debug=True)
