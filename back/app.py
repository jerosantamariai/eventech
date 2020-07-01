import os  
from flask import Flask, jsonify, request, render_template, send_from_directory
from flask_script import Manager
from flask_migrate import Migrate, MigrateCommand
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from models import db, Roles, Users, Ticket
from flask_mail import Mail, Message
from werkzeug.utils import secure_filename
from functions import allowed_file
from flask_jwt_extended import (
    JWTManager, jwt_required, create_access_token,
    get_jwt_identity
)

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
ALLOWED_EXTENSIONS_IMAGES = {'png', 'jpg', 'jpeg', 'gif', 'svg'}

app = Flask(__name__)
app.url_map.strict_slashes = False
app.config['DEBUG '] = True
app.config['ENV'] = 'development'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite3'
# app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:password@localhost:3306/db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = 'super-secret'  # Change this!
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USE_SSL'] = True
app.config['MAIL_USERNAME'] = 'jerosantamariai@gmail.com' #La cuenta de correo electronico de donde saldran los correos
app.config['MAIL_PASSWORD'] = ''
app.config['UPLOAD_FOLDER'] = os.path.join(BASE_DIR, 'static')
jwt = JWTManager(app)

db.init_app(app)

Migrate(app, db)
CORS(app)
bcrypt = Bcrypt(app)
mail = Mail(app)
manager = Manager(app)
manager.add_command("db", MigrateCommand)

@app.route("/")
def root():
    return render_template('index.html')

# BASE DE METODOS PARA TRABAJAR

# @app.route('/todo', methods=['GET', 'POST'])
# @app.route('/todo/<int:id>', methods=['GET', 'PUT', 'DELETE'])
# #@jwt_required
# def todo(id = None):
#     if request.method == 'GET':
#         if id is not None:
#             todo = Todos.query.get(id)
#             if todo:                  
#                 return jsonify(todo.serialize()), 200
#             else:                        
#                 return jsonify({"msg": "Not Found"}), 404 
#         else:                                                              
#             todos = Todos.query.all()              
#             todos = list(map(lambda todo: todo.serialize(), todos)) 
#             return jsonify(todos), 200                              

#     if request.method == 'POST':                                    
#         tramite = request.json.get('tramite', None)                 
#         tareas = request.json.get('tareas', None)                   

#         if not tramite and tramite == "":                           
#             return jsonify({"msg": "Ingresar Tramite"}), 400        
#         elif not tareas and tareas == "":                           
#             return jsonify({"msg": "Ingresar Tareas"}), 400         

#         tramites = Todos()                                          
#         tramites.tramite = tramite                                  
#         tramites.tareas = tareas                                    

#         db.session.add(tramites)                                    
#         db.session.commit()                                         

#         return jsonify(tramites.serialize()), 200                   

#     if request.method == 'PUT':                                     
#         tramite = request.json.get("tramite", None)
#         tareas = request.json.get("tareas", None)

#         if not tramite and tramite == "":
#             return jsonify({"msg": "Field tramite is required"}), 400
#         elif not tareas and tareas == "":
#             return jsonify({"msg": "Field tareas is required"}), 400

#         todopost = Todos.query.get(id)
    
#         if not todopost:
#             return jsonify({"msg": "Not Found"}), 404

#         todopost.tramite = tramite
#         todopost.tareas = tareas

#         db.session.commit()

#         return jsonify(todopost.serialize()), 200

#     if request.method == 'DELETE':
#         todos = Todos.query.get(id)
#         if not todos:
#             return jsonify({"msg": "Item not found"}), 400
#         db.session.delete(todos)
#         db.session.commit()
#         return jsonify({"msg": "Item deleted"}), 200

@manager.command
def loadroles():
    role = Roles()
    role.rolename = "admin"

    db.session.add(role)
    db.session.commit()

    role = Roles()
    role.rolename = "finanzas"

    db.session.add(role)
    db.session.commit()

    role = Roles()
    role.rolename = "comercial"

    db.session.add(role)
    db.session.commit()

    role = Roles()  
    role.rolename = "staff general"

    db.session.add(role)
    db.session.commit()

    role = Roles()  
    role.rolename = "alimentacion"

    db.session.add(role)
    db.session.commit()

    role = Roles()
    role.rolename = "seguridad"

    db.session.add(role)
    db.session.commit()

    role = Roles()
    role.rolename = "protagonista"

    db.session.add(role)
    db.session.commit()

    role = Roles()
    role.rolename = "cliente"

    db.session.add(role)
    db.session.commit()

    print("Roles creados")

@manager.command
def loadadmin():
    users = Users()
    users.email = "admin@eventech.cl"
    users.password = bcrypt.generate_password_hash("123456")        #Its obviously the first change that I make into my webpage is to change this password of my account
    users.role_id = "1"

    db.session.add(users)
    db.session.commit()

    print("Administrador Creado! Buena suerte!")


if __name__ == '__main__':
    manager.run()