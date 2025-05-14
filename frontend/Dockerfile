FROM node:18

WORKDIR /app

# Copy package.json และ lock file ก่อน เพื่อใช้ cache
COPY package*.json ./

# ติดตั้ง dependencies (รวม next dev แบบ local)
RUN npm install

# จากนั้นค่อย copy โค้ดทั้งหมด
COPY . .

# เปิด port สำหรับ Next.js (โดยปกติคือ 3000)
EXPOSE 3000

# เริ่ม dev server ด้วย turbopack
CMD ["npx", "next", "dev", "--turbo"]
