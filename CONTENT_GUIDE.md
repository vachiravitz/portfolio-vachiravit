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
- เอกสาร PDF ของโปรเจกต์: `public/documents/projects`
- รูปกิจกรรม: `public/images/activities`
- รูปใบรับรอง: `public/images/certificates`

ตัวอย่างการใส่รูปโปรเจกต์:

```ts
image: "/images/projects/my-project.jpg",
documentation: "/documents/projects/my-project.pdf",
```

หากยังไม่มีรูปหรือลิงก์ ให้ใช้ค่าว่าง:

```ts
image: "",
demo: "",
documentation: "",
```

เมื่อใส่ path ใน `documentation` ปุ่ม `Read project documentation` จะปรากฏในรายละเอียดโปรเจกต์ และเปิด PDF ในแท็บใหม่ หากยังไม่มีเอกสารให้ใช้ค่าว่าง `""` ปุ่มจะถูกซ่อนไว้อัตโนมัติ

## ไฟล์หน้าจอแต่ละ Section

| Section | ไฟล์ |
| --- | --- |
| หน้าหลัก | `app/sections/Hero.tsx` |
| Education | `app/sections/Education.tsx` |
| Projects | `app/sections/Projects.tsx` |
| Skills | `app/sections/Skills.tsx` |
| Activities | `app/sections/Activities.tsx` |
| Work Experience | `app/sections/Experience.tsx` |
| Certifications | `app/sections/Certificates.tsx` |
| Contact | `app/sections/Contact.tsx` |
| Footer | `app/sections/Footer.tsx` |

หากต้องการแก้เฉพาะข้อความหรือข้อมูล ไม่จำเป็นต้องแก้ไฟล์ใน `app/sections` ให้แก้ไฟล์ใน `app/data` ก่อน

## หน้า Project Case Study

ปุ่ม `Read project details` จะเปิดหน้าเฉพาะของแต่ละโปรเจกต์ เช่น `/projects/giewbu-ai-project`

ข้อมูลทั้งหมดของหน้านี้แก้ใน `app/data/projects.ts` ภายใน `details` ของโปรเจกต์นั้น:

- `slug` คือชื่อที่อยู่บน URL ใช้ตัวอักษรอังกฤษเล็กและ `-`
- `headline` คือหัวข้อใหญ่ของ Case Study
- `overviewLabel` คือคำเล็กเหนือหัวข้อ เช่น `OVERVIEW`
- `highlight` คือป้ายสีเด่นเหนือ Overview เช่น `AWARD-WINNING AI PROJECT` หากไม่ใช้ให้ใส่ `""`
- `overview` คือย่อหน้าอธิบายโปรเจกต์
- `role` และ `roleDescription` คือบทบาทของคุณ
- `features` คือความสามารถสำคัญ 3 ส่วน
- `gallery` คือรูปเพิ่มเติมและคำบรรยาย
- `collaborators` คือรายชื่อสมาชิก
- `recognition` คือรางวัลหรือการยอมรับ
- `documentation` คือ path ของเอกสาร PDF

ตัวอย่างการใส่รูปเพิ่มเติม:

```ts
gallery: [
  {
    image: "/images/projects/giewbu-summary.jpg",
    caption: "Summary insight and conversation analysis interface.",
    wide: false,
    fit: "contain",
  },
],
```

กำหนด `wide: false` สำหรับรูปขนาดปกติสองคอลัมน์ และใช้ `wide: true` เมื่อต้องการให้รูปกินพื้นที่เต็มแถว

- `fit: "cover"` ทำให้รูปเต็มช่อง ไม่มีพื้นที่สีขาว แต่อาจตัดขอบรูปเล็กน้อย
- `fit: "contain"` แสดงรูปครบทั้งภาพ แต่อาจมีพื้นที่ว่างหากสัดส่วนรูปไม่ตรงกับช่อง

## สีและฟอนต์

แก้ที่ `app/theme.css` ไฟล์เดียว โดยในไฟล์จะแยกส่วนไว้ให้แล้ว เช่น:

- `ทั้งเว็บไซต์` เปลี่ยนสีพื้นหลังและฟอนต์หลักทั้งเว็บ
- `EDUCATION` เปลี่ยนเฉพาะการศึกษา
- `SKILLS` เปลี่ยนเฉพาะ Technical / Design / Soft Skills
- `PROJECTS`, `ACTIVITIES`, `EXPERIENCE` เปลี่ยนเฉพาะส่วนนั้น

ตัวอย่าง หากต้องการเปลี่ยนเฉพาะ Skills ให้ค้นหา `SKILLS` แล้วแก้:

```css
#skills {
  --skills-category-color: #0b2b69;
  --skills-item-color: #2448b6;
  --skills-bullet-color: #2448b6;
  --skills-heading-font: "Arial", sans-serif;
  --skills-item-font: "Tahoma", sans-serif;
}
```

สีใช้รหัส HEX เช่น `#000000` และฟอนต์ใส่ชื่อไว้ในเครื่องหมายคำพูด เช่น `"Tahoma"` หากแก้แล้วกด `Ctrl+S` หน้าเว็บจะอัปเดตทันที

## ลำดับ Section

แก้ที่ `app/components/PortfolioPage.tsx` โดยย้ายลำดับบรรทัด เช่น:

```tsx
<Hero />
<Education />
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
