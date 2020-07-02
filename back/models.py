from datetime import datetime
from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()

## one to one se pone la q tiene el backref en el padre los nombres tienen q coincidir

class Roles (db.Model):
    __tablename__ = 'roles'
    id = db.Column(db.Integer, primary_key=True)
    rolename = db.Column(db.String(50), unique=True, nullable=False)
    users = db.relationship("User", backref="role", cascade="all, delete")
    
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
    role_id = db.Column(db.Integer, db.ForeignKey("roles.id"))
    events = db.relationship("Evento", backref="user",  cascade="all, delete" )
    emergencia = db.relationship("Emergencia", back_populates="user") 
    
    def serialize(self):
        eventos= []
        events = list(map(lambda event: event.serialize(), self.events)),
        emergencia = list(map(lambda emergencia: emergencia.serialize(), self.emergencia))
        return {
            "id": self.id,
            "name": self.name,
            "lastname": self.lastname,
            "email": self.email,
            "avatar": self.avatar,
            "phone": self.phone,
            "documento": self.documento,
            "createdate": self.createdate,
            "role": self.role.serialize(),
            "events": events,
            "emergencia": emergencia
        }

class Emergencia (db.Model):
    __tablename__ = 'emergencia'
    id = db.Column(db.Integer, primary_key=True)
    gruposangre = db.Column(db.String(15), nullable=True)
    alergia = db.Column(db.String(100), nullable=True)
    enfermedadbase = db.Column(db.String(100), nullable=True)
    clinica = db.Column(db.String(100), nullable=True)
    medicamentos = db.Column(db.String(100), nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    user = db.relationship("User", back_populates="emergencia")
    
    def serialize(self):
        return {
            "id": self.id,
            "gruposangre": self.gruposangre,
            "alergia": self.alergia,
            "enfermedadbase": self.enfermedadbase,
            "clinica": self.clinica,
            "medicamentos": self.medicamentos,
        }

class Evento (db.Model):
    __tablename__ = 'evento'
    id = db.Column(db.Integer, primary_key=True)
    eventname = db.Column(db.String(100), nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    ticket = db.relationship("Ticket", back_populates="evento") 
    
    def serialize(self):
        ticket = list(map(lambda ticke: ticke.serialize(), self.ticket))
        return {
            "id": self.id,
            "eventname": self.eventname,
            "ticket": ticket
        }

class Categoria (db.Model):
    __tablename__ = 'categoria'
    id = db.Column(db.Integer, primary_key=True)
    catname = db.Column(db.Integer, nullable=True)
    
    def serialize(self):
        return {
            "id": self.id,
            "catname": self.catname,
        }

class Codigo (db.Model):
    __tablename__ = 'codigo'
    id = db.Column(db.Integer, primary_key=True)
    sku = db.Column(db.Integer, nullable=True)
    qrcode = db.Column(db.String(100), nullable=True)
    ticket_id = db.Column(db.Integer, db.ForeignKey('ticket.id'))
    ticket = db.relationship("Ticket", back_populates="codigo")
    
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
    evento_id = db.Column(db.Integer, db.ForeignKey('evento.id'))
    evento = db.relationship("Evento", back_populates="ticket")
    codigo = db.relationship("Codigo", back_populates="ticket") 
    
    def serialize(self):
        codigo = list(map(lambda cod: cod.serialize(), self.codigo))
        return {
            "id": self.id,
            "numpago": self.numpago,
            "asistencia": self.asistencia,
            "fechacompra": self.fechacompra,
            "fechapago": self.fechapago,
            "codigo": codigo,
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