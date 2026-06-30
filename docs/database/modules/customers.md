# customers

## Description

Menyimpan data pelanggan ISP.

---

## Columns

| Column | Type | Description |
|---------|------|-------------|
| id | BIGINT | Primary Key |
| uuid | CHAR(36) | UUID |
| customer_code | VARCHAR(30) | Nomor pelanggan |
| full_name | VARCHAR(150) | Nama pelanggan |
| company_name | VARCHAR(150) | Nama perusahaan |
| email | VARCHAR(150) | Email |
| phone | VARCHAR(25) | Nomor HP |
| whatsapp | VARCHAR(25) | WhatsApp |
| identity_number | VARCHAR(50) | NIK/KTP |
| customer_type | ENUM | Personal / Business |
| status | ENUM | Active / Suspend / Terminated |
| join_date | DATE | Tanggal aktif |
| notes | TEXT | Catatan |

---

## Audit

created_at

updated_at

deleted_at

created_by

updated_by

deleted_by