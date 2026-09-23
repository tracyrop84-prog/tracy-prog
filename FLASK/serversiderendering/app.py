from flask import Flask,send_file,render_template

#app=Flask(__name__,template_folder="customer_template")
app=Flask(__name__)

clients=[
    {
        "id": "ENT-001",
        "name": "Acme Corporation",
        "industry": "Technology",
        "status": "Active",
        "arr": 120000,
    },
    {
        "id": "ENT-002",
        "name": "Global Tech Logistics",
        "industry": "Supply Chain",
        "status": "Active",
        "arr": 250000,
    },
    {
        "id": "ENT-003",
        "name": "Apex Financial Group",
        "industry": "Finance",
        "status": "Active",
        "arr": 180000,
    },
]

@app.route("/")
def home():
    #link ai model <>
    return render_template("home.html")

#without using jinja 
@app.route("/custom/about")
def custom_about():
    start_html="""
                        <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Document</title>
                    </head>
                    <body>
                    <h1>About our clients</h1>
    """
    end_html="""
                    </body>
                    </html>
    """
    list_html=""
    
    for client in clients:
        list_html=list_html+f"""
          <ul><li>NAME: {client["name"]}</li>
          <li>INDUSTRY: {client["industry"]}</li>
          <li>STATUS: {client["status"]}</li>
        </ul>
        """

    full_html=start_html+f"<div>{list_html}</div>"+end_html

    return full_html

@app.route("/about")
def about():
   return render_template("about.html",clients=clients)

if __name__=="__main__":
    #app.run(debug=True,port=4040)
    app.run(debug=True)