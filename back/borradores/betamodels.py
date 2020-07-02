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

class User (db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    password = db.Column(db.String(100), nullable=False)
    name = db.Column(db.String(100), nullable=True)
    lastname = db.Column(db.String(100), nullable=True)
    email = db.Column(db.String(100), nullable=False)
    avatar = db.Column(db.String(100), nullable=True, default='defaultavatar.jpg')
    phone = db.Column(db.String(12), nullable=True)
    posx = db.Column(db.String(50), nullable=True)
    posy = db.Column(db.String(50), nullable=True)
    documento = db.Column(db.String(20), nullable=True)
    birthdate = db.Column(db.String(15), nullable=True)
    createdate = db.Column(db.DateTime, default=datetime.now())

    def serialize(self):
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
        }

class Categoria (db.Model):
    __tablename__ = 'categoria'
    id = db.Column(db.Integer, primary_key=True)
    catname = db.Column(db.Integer(100), nullable=True)

    def serialize(self):
        return {
            "id": self.id,
            "catname": self.catname,
        }

class Codigo (db.Model):
    __tablename__ = 'codigo'
    id = db.Column(db.Integer, primary_key=True)
    sku = db.Column(db.Integer(100), nullable=True)
    qrcode = db.Column(db.String(100), nullable=True)

    def serialize(self):
        return {
            "id": self.id,
            "sku": self.sku,
            "qrcode": self.qrcode,
        }

class Ticket (db.Model):
    __tablename__ = 'ticket'
    id = db.Column(db.Integer, primary_key=True)
    numpago = db.Column(db.String(100), nullable=True)
    asistencia = db.Column(db.Boolean, nullable=True, default=False)
    fechacompra = db.Column(db.String(10), nullable=True)
    fechapago = db.Column(db.String(10), nullable=True)

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

class Evento (db.Model):
    __tablename__ = 'evento'
    id = db.Column(db.Integer, primary_key=True)
    eventname = db.Column(db.String(100), nullable=True)

    def serialize(self):
        return {
            "id": self.id,
            "eventname": self.eventname,
        }

class Contacto (db.Model):
    __tablename__ = 'contacto'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100), nullable=True)
    phone = db.Column(db.String(100), nullable=True)

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "phone": self.phone,
        }

class Medicamentos (db.Model):
    __tablename__ = 'medicamentos'
    id = db.Column(db.Integer, primary_key=True)
    remedio = db.Column(db.String(100), nullable=True)

    def serialize(self):
        return {
            "id": self.id,
            "remedio": self.remedio,
        }

class Emergencia (db.Model):
    __tablename__ = 'emergencia'
    id = db.Column(db.Integer, primary_key=True)
    gruposangre = db.Column(db.String(15), nullable=True)
    alergia = db.Column(db.String(100), nullable=True)
    enfermedadbase = db.Column(db.String(100), nullable=True)
    clinica = db.Column(db.String(100), nullable=True)
    medicamentos = db.Column(db.String(100), nullable=True)

    def serialize(self):
        return {
            "id": self.id,
            "gruposangre": self.gruposangre,
            "alergia": self.alergia,
            "enfermedadbase": self.enfermedadbase,
            "clinica": self.clinica,
            "medicamentos": self.medicamentos,
        }