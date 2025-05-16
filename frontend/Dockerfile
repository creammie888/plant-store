# 1. ใช้ Node.js base image
FROM node:18-alpine

# 2. สร้าง working directory
WORKDIR /app

# 3. คัดลอกไฟล์สำหรับติดตั้ง dependencies
COPY package*.json ./

# 4. ติดตั้ง dependencies
RUN npm install

# 5. คัดลอกโค้ดทั้งหมด
COPY . .

# 6. สร้าง production build
RUN npm run build

# 7. ระบุพอร์ต (Next.js ใช้ 3000)
EXPOSE 3000

# 8. เริ่มแอป
CMD ["npm", "start"]
