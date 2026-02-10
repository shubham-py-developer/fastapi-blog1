"""increase password length

Revision ID: a1b9b4765abe
Revises: 3bd4d56d1553
Create Date: 2026-02-06 16:57:28.709920
"""

from alembic import op
import sqlalchemy as sa

# revision identifiers, used by Alembic.
revision = 'a1b9b4765abe'
down_revision = '3bd4d56d1553'
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.alter_column(
        "users",
        "password",
        existing_type=sa.VARCHAR(length=30),
        type_=sa.String(length=255),
    )


def downgrade() -> None:
    op.alter_column(
        "users",
        "password",
        existing_type=sa.String(length=255),
        type_=sa.VARCHAR(length=30),
    )
