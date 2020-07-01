from datetime import datetime
from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()

class Roles (db.Model):
    __tablename__ = 'roles'
    id = db.Column(db.Integer, primary_key=True)
    rolename = db.Column(db.String(50), unique=True, nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "rolename": self.rolename
        }

class Users (db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    password = db.Column(db.String(100), nullable=False)
    name = db.Column(db.String(100), nullable=True)
    lastname = db.Column(db.String(100), nullable=True)
    email = db.Column(db.String(100), nullable=False)
    avatar = db.Column(db.String(100), nullable=True, default='defaultavatar.jpg')
    phone = db.Column(db.String(12), nullable=True)
    cordenadas = db.Column(db.String(50), nullable=True)
    documento = db.Column(db.String(20), nullable=True)
    birthdate = db.Column(db.String(10), nullable=True)
    createdate = db.Column(db.DateTime, default=datetime.now())
    role_id = db.Column(db.Integer, db.ForeignKey('roles.id'), nullable=False)
    role = db.relationship(Roles)
    ticket = db.relationship("Ticket", backref="ticket")
    emergencia = db.relationship("Emergencia", backref="emergencia")
    
    def serialize(self):
        ticket = []
        ticket = list(map(lambda ticke: ticke.serialize(), self.ticket))

        emergencia = []
        emergencia = list(map(lambda emergenci: emergenci.serialize(), self.emergencia))
        return {
            "id": self.id,
            "name": self.name,
            "lastname": self.lastname,
            "email": self.email,
            "avatar": self.avatar,
            "phone": self.phone,
            "coordenadas": self.coordenadas,
            "documento": self.documento,
            "createdate": self.createdate,
            "role": self.role.serialize(),
            "ticket": self.ticket.serialize(),
            "emergencia": self.emergencia.serialize(),
        }

class Ticket (db.Model):
    __tablename__ = 'ticket'
    id = db.Column(db.Integer, primary_key=True)
    numpago = db.Column(db.String(100), nullable=True)
    asistencia = db.Column(db.Boolean, nullable=False, default='0')
    fechacompra = db.Column(db.String(10), nullable=False)
    fechapago = db.Column(db.String(10), nullable=False)
    categoria = db.Column(db.String(50), nullable=False)
    codigo = db.Column(db.String(100), nullable=False)
    users_id = db.Column(db.Integer, db.ForeignKey("users.id"))  

    def serialize(self):
        return {
            "id": self.id,
            "numpago": self.numpago,
            "asistencia": self.asistencia,
            "fechacompra": self.fechacompra,
            "fechapago": self.fechapago,
            "categoria": self.categoria,
            "codigo": self.codigo,
        }

class Emergencia (db.Model):
    __tablename__ = 'emergencia'
    id = db.Column(db.Integer, primary_key=True)
    gruposangre = db.Column(db.String(15), nullable=True)
    alergia = db.Column(db.String(100), nullable=False)
    enfermedadbase = db.Column(db.String(100), nullable=False)
    contactouno = db.Column(db.String(20), nullable=False)
    contactodos = db.Column(db.String(20), nullable=False)
    telcontuno = db.Column(db.String(20), nullable=False)
    telcontdos = db.Column(db.String(20), nullable=False)
    seguros = db.Column(db.String(100), nullable=False)
    medicamentos = db.Column(db.String(100), nullable=False)
    users_id = db.Column(db.Integer, db.ForeignKey("users.id")) 

    def serialize(self):
        return {
            "id": self.id,
            "gruposangre": self.gruposangre,
            "alergia": self.alergia,
            "enfermedadbase": self.enfermedadbase,
            "contactouno": self.contactouno,
            "contactodos": self.contactodos,
            "telcontuno": self.telcontuno,
            "telcontdos": self.telcontdos,
            "seguros": self.seguros,
            "medicamentos": self.medicamentos,
        }