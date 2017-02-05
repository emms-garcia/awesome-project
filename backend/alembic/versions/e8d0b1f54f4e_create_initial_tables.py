"""create initial tables

Revision ID: e8d0b1f54f4e
Revises:
Create Date: 2017-01-24 20:54:23.416219

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e8d0b1f54f4e'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    op.create_table(
        'users',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('name', sa.Unicode(128)),
        sa.Column('email', sa.Unicode(128), nullable=False, unique=True),
        sa.Column('password', sa.Text(), nullable=False),
        sa.Column('role', sa.Unicode(64), nullable=False),
        sa.Column(
            'created_date',
            sa.DateTime,
            server_default=sa.func.current_timestamp()
        )
    )

    op.create_table(
        'widgets',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('name', sa.Unicode(128), nullable=False),
        sa.Column('description', sa.Unicode(512), nullable=True),
        sa.Column('snippet', sa.Text, nullable=False),
        sa.Column(
            'metadata',
            sa.dialects.postgresql.JSON,
            nullable=True,
            server_default='{}',
        ),
        sa.Column('user_id', sa.Integer, sa.ForeignKey('users.id')),
    )


def downgrade():
    op.drop_table('widgets')
    op.drop_table('users')
