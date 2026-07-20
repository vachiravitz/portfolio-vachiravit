# คู่มือแก้ข้อมูล Portfolio

ข้อมูลที่แสดงบนเว็บไซต์เกือบทั้งหมดอยู่ในไฟล์เดียว:

`app/data/portfolio.ts`

เปิดไฟล์นี้ด้วย VS Code แล้วค้นหาหัวข้อที่ต้องการแก้ เช่น `profile`, `about`, `projects`, `skillGroups`, `workExperience`, `activities` หรือ `certificates`

## 1. ชื่อ รูป และช่องทางติดต่อ

แก้ใน `profile`:

- `name` ชื่อ–นามสกุล
- `initials` ตัวอักษรย่อบนโลโก้
- `role` ตำแหน่งหรือเป้าหมายอาชีพ
- `intro` ข้อมูลสรุปสั้น ๆ
- `email`, `phone`, `location`
- `socials` ลิงก์ GitHub, LinkedIn และ Twitter / X

หากต้องการใช้รูปจริง ให้นำรูปชื่อ `profile.png` ไปวางในโฟลเดอร์ `public` แล้วแก้:

```ts
photo: "/profile.png",
```

นำ Resume ชื่อ `resume.pdf` ไปวางในโฟลเดอร์ `public` ปุ่มดาวน์โหลดจะใช้งานได้ทันที

## 2. การศึกษาและเกี่ยวกับฉัน

แก้ใน `about.body`, `about.education` และ `about.details` สามารถเพิ่มรายการได้โดยคัดลอก object เดิมทั้งชุดแล้วเปลี่ยนข้อความ

## 3. โปรเจกต์

แก้รายการใน `projects`:

- `course` ชื่อรายวิชาหรือประเภทโปรเจกต์
- `description` รายละเอียดผลงาน
- `responsibility` ส่วนที่ตัวเองรับผิดชอบ
- `outcome` ผลลัพธ์หรือสิ่งที่ได้เรียนรู้
- `tags` เครื่องมือและเทคโนโลยี
- `github`, `demo`, `figma` ลิงก์ต่าง ๆ
- `image` รูป Screenshot ของผลงาน

วางรูปไว้ที่ `public/images/projects` แล้วใส่ path เช่น:

```ts
image: "/images/projects/my-project.jpg",
```

ควรใส่ Screenshot ไว้เสมอเมื่อใช้ลิงก์ Figma เพื่อให้ผู้ชมเห็นผลงานได้ทันที

## 4. ระดับทักษะ

แก้ `skillGroups` โดย `level` เป็นตัวเลขตั้งแต่ 0–100 เช่น:

```ts
{ name: "React", level: 80 }
```

## 5. ประสบการณ์ กิจกรรม และใบรับรอง

- ประสบการณ์งาน: `workExperience`
- กิจกรรม/การแข่งขัน/ชมรม/สัมมนา: `activities`
- ใบรับรองและการอบรม: `certificates`

รูปกิจกรรมวางใน `public/images/activities` และรูปใบรับรองวางใน `public/images/certificates`

## 6. ดูผลบนเครื่อง

เปิด PowerShell ในโฟลเดอร์โปรเจกต์แล้วรัน:

```powershell
npm.cmd run dev
```

เปิด `http://localhost:3000` เมื่อแก้และบันทึกไฟล์ หน้าเว็บจะอัปเดตอัตโนมัติ กด `Ctrl + C` เพื่อหยุด

## ข้อควรระวัง

- ข้อความต้องอยู่ระหว่างเครื่องหมาย `"..."`
- แต่ละรายการคั่นด้วยเครื่องหมาย comma `,`
- หากยังไม่มีลิงก์หรือรูป ให้ใช้ค่าว่าง `""`
- อย่าลบชื่อ field ทางซ้าย เช่น `title:` หรือ `description:`

