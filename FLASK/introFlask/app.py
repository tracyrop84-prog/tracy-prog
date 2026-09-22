from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "Hello, tracy!"
@app.route("/about")
def about():
    return "this is my about page"
@app.route("/pic")
def get_pic():
    file_path = "one.png"
    return send_file(file_path)

if __name__ == "__main__":
    app.run(debug=True)