# users

## Description

Menyimpan seluruh pengguna yang dapat mengakses sistem SkyNet.

---

## Columns

| Column | Type | Nullable | Description |
|---------|------|----------|-------------|
| id | BIGINT | No | Primary Key |
| uuid | CHAR(36) | No | UUID |
| full_name | VARCHAR(150) | No | Nama lengkap |
| username | VARCHAR(50) | No | Username login |
| email | VARCHAR(150) | Yes | Email |
| phone | VARCHAR(25) | Yes | Nomor HP |
| password | VARCHAR(255) | No | Password Hash |
| avatar | VARCHAR(255) | Yes | Foto |
| is_active | BOOLEAN | No | Status aktif |
| last_login | DATETIME | Yes | Login terakhir |

---

## Audit

created_at

updated_at

deleted_at

created_by

updated_by

deleted_by