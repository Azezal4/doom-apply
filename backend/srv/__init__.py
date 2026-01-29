import flask

app = flask.Flask(__name__)

app.secret_key = "Hello"

@app.route('/vendors/<path:filepath>')
def getassets(filepath):
    return flask.send_from_directory('../assets', filepath)

@app.route('/vendors/<path:filepath>')
def getVendors(filepath):
    return flask.send_from_directory('../vendors', filepath)