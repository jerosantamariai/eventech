"""empty message

Revision ID: 5d774809a2e9
Revises: 
Create Date: 2020-07-03 22:05:57.687949

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '5d774809a2e9'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('categoria',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('catname', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('medicamentos',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('remedio', sa.String(length=100), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('roles',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('rolename', sa.String(length=50), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('rolename')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('password', sa.String(length=100), nullable=False),
    sa.Column('name', sa.String(length=100), nullable=True),
    sa.Column('lastname', sa.String(length=100), nullable=True),
    sa.Column('email', sa.String(length=100), nullable=False),
    sa.Column('avatar', sa.String(length=100), nullable=True),
    sa.Column('phone', sa.String(length=12), nullable=True),
    sa.Column('posx', sa.String(length=50), nullable=True),
    sa.Column('posy', sa.String(length=50), nullable=True),
    sa.Column('documento', sa.String(length=20), nullable=True),
    sa.Column('birthdate', sa.String(length=15), nullable=True),
    sa.Column('createdate', sa.DateTime(), nullable=True),
    sa.Column('role_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['role_id'], ['roles.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('emergencia',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('gruposangre', sa.String(length=15), nullable=True),
    sa.Column('alergia', sa.String(length=100), nullable=True),
    sa.Column('enfermedadbase', sa.String(length=100), nullable=True),
    sa.Column('clinica', sa.String(length=100), nullable=True),
    sa.Column('medicamentos', sa.String(length=100), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('evento',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('eventname', sa.String(length=100), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('contacto',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('nombre', sa.String(length=100), nullable=True),
    sa.Column('phone', sa.String(length=100), nullable=True),
    sa.Column('emergenci_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['emergenci_id'], ['emergencia.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('ticket',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('numpago', sa.String(length=100), nullable=True),
    sa.Column('asistencia', sa.Boolean(), nullable=True),
    sa.Column('fechacompra', sa.String(length=10), nullable=True),
    sa.Column('fechapago', sa.String(length=10), nullable=True),
    sa.Column('evento_id', sa.Integer(), nullable=True),
    sa.Column('categoria_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['categoria_id'], ['categoria.id'], ),
    sa.ForeignKeyConstraint(['evento_id'], ['evento.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('codigo',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('sku', sa.Integer(), nullable=True),
    sa.Column('qrcode', sa.String(length=100), nullable=True),
    sa.Column('ticket_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['ticket_id'], ['ticket.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('codigo')
    op.drop_table('ticket')
    op.drop_table('contacto')
    op.drop_table('evento')
    op.drop_table('emergencia')
    op.drop_table('user')
    op.drop_table('roles')
    op.drop_table('medicamentos')
    op.drop_table('categoria')
    # ### end Alembic commands ###