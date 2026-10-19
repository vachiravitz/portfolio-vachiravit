# คู่มือแก้ข้อมูล Portfolio

ตอนนี้ข้อมูลและหน้าจอถูกแยกตาม Section แล้ว คุณจึงแก้เฉพาะไฟล์ที่เกี่ยวข้องได้เลย

## ข้อมูลที่ต้องแก้บ่อย

| สิ่งที่ต้องการแก้ | ไฟล์ |
| --- | --- |
| ชื่อ รูป อีเมล เบอร์โทร Social Media | `app/data/profile.ts` |
| ข้อความ About Me | `app/data/about.ts` |
| ประวัติการศึกษา | `app/data/education.ts` |
| Technical / Design / Soft Skills | `app/data/skills.ts` |
| ผลงานและโปรเจกต์ | `app/data/projects.ts` |
| กิจกรรม | `app/data/activities.ts` |
| ประสบการณ์ทำงาน | `app/data/experience.ts` |
| ใบรับรอง | `app/data/certificates.ts` |
| เมนูด้านบน | `app/data/navigation.ts` |

## รูปและเอกสาร

- รูปโปรไฟล์: `public/profile.png`
- Resume: `public/resume.pdf`
- รูปโปรเจกต์: `public/images/projects`
- รูปกิจกรรม: `public/images/activities`
- รูปใบรับรอง: `public/images/certificates`

ตัวอย่างการใส่รูปโปรเจกต์:

```ts
image: "/images/projects/my-project.jpg",
```

หากยังไม่มีรูปหรือลิงก์ ให้ใช้ค่าว่าง:

```ts
image: "",
demo: "",
```

## ไฟล์หน้าจอแต่ละ Section

| Section | ไฟล์ |
| --- | --- |
| หน้าหลัก | `app/sections/Hero.tsx` |
| About และ Education | `app/sections/About.tsx` |
| Projects | `app/sections/Projects.tsx` |
| Skills | `app/sections/Skills.tsx` |
| Activities | `app/sections/Activities.tsx` |
| Work Experience | `app/sections/Experience.tsx` |
| Certifications | `app/sections/Certificates.tsx` |
| Contact | `app/sections/Contact.tsx` |
| Footer | `app/sections/Footer.tsx` |

หากต้องการแก้เฉพาะข้อความหรือข้อมูล ไม่จำเป็นต้องแก้ไฟล์ใน `app/sections` ให้แก้ไฟล์ใน `app/data` ก่อน

## สีและรูปแบบ

แก้ที่ `app/globals.css` แล้วค้นหา:

```css
/* White minimal theme */
```

สีหลักอยู่ในตัวแปร:

```css
:root {
  --ink: #0b2b69;
  --page: #ffffff;
  --blue: #2448b6;
}
```

## ลำดับ Section

แก้ที่ `app/components/PortfolioPage.tsx` โดยย้ายลำดับบรรทัด เช่น:

```tsx
<Hero />
<About />
<Projects />
<Skills />
<Activities />
<Experience />
```

## เปิดดูแบบ Real-time

```powershell
cd "C:\Users\USER\OneDrive\Desktop\Portfolio"
npm.cmd run dev
```

เปิด `http://localhost:3000` แล้วกด `Ctrl+S` หลังแก้ไฟล์ หน้าเว็บจะอัปเดตอัตโนมัติ

## ข้อควรระวัง

- ข้อความต้องอยู่ระหว่างเครื่องหมาย `"..."`
- แต่ละรายการคั่นด้วย comma `,`
- อย่าลบชื่อ field ทางซ้าย เช่น `title:` หรือ `description:`
- หากเพิ่มรายการใหม่ ให้คัดลอก object เดิมทั้งชุดเพื่อป้องกัน field หาย
