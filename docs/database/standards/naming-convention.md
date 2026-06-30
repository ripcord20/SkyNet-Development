# Database Naming Convention

## Tables

Semua tabel menggunakan plural.

Contoh

users

customers

payments

routers

onts

tickets

---

## Primary Key

id

BIGINT

AUTO_INCREMENT

---

## UUID

uuid

CHAR(36)

UNIQUE

---

## Foreign Key

customer_id

user_id

invoice_id

router_id

olt_id

---

## Boolean

Diawali is_

is_active

is_online

is_deleted

---

## Datetime

created_at

updated_at

deleted_at

last_login

last_seen

expired_at

---

## Audit

created_by

updated_by

deleted_by