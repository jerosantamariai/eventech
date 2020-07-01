from flask import Flask, jsonify, request, render_template
from flask_script import Manager
from flask_migrate import Migrate, MigrateCommand
from flask_cors import CORS
from models import db


app = Flask(__name__)
app.config['DEBUG '] = True
app.config['ENV'] = 'development'
app.config['SQLALCHEMY_DATABASE_URI'] = ''
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

Migrate(app, db)
CORS(app)

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

if __name__ == '__main__':
    manager.run()