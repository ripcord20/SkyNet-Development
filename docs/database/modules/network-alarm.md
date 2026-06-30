# network_alarm

## Description

Menyimpan seluruh alarm jaringan.

---

## Columns

| Column | Type | Description |
|---------|------|-------------|
| id | BIGINT | Primary Key |
| uuid | CHAR(36) | UUID |
| device_type | ENUM | Jenis perangkat |
| device_id | BIGINT | ID perangkat |
| severity | ENUM | Level alarm |
| alarm | VARCHAR(150) | Nama alarm |
| description | TEXT | Keterangan |
| status | ENUM | Status alarm |
| resolved_at | DATETIME | Waktu selesai |

---

## Severity

| Value | Description |
|--------|-------------|
| INFO | Informasi |
| WARNING | Perlu diperhatikan |
| MAJOR | Gangguan serius |
| CRITICAL | Gangguan kritis |

---

## Status

| Value | Description |
|--------|-------------|
| OPEN | Alarm aktif |
| ACKNOWLEDGED | Sudah diketahui operator |
| RESOLVED | Sudah selesai |
| CLOSED | Ditutup |

---

## Device Type

| Value |
|-------|
| MikroTik |
| OLT |
| ONU |
| Switch |
| Server |
| ACS |
