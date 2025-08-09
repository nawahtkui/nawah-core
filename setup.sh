#!/bin/bash
set -e

echo "🔄 تحقق من المتطلبات..."

command -v node >/dev/null 2>&1 || { echo >&2 "❌ Node.js غير مثبت. رجاء التثبيت أولاً."; exit 1; }
command -v git >/dev/null 2>&1 || { echo >&2 "❌ Git غير مثبت. رجاء التثبيت أولاً."; exit 1; }

echo "📥 نسخ المشروع..."
if [ ! -d "nawah-core" ]; then
  git clone https://github.com/nawahtkui/nawah-core.git
fi
cd nawah-core

echo "📦 تثبيت الحزم..."
npm install

echo "⚙️ إعداد ملف البيئة..."
if [ -f ".env.example" ] && [ ! -f ".env" ]; then
    cp .env.example .env
    echo "تم إنشاء ملف .env من .env.example"
fi

# خيار تشغيل Docker إذا موجود
if command -v docker >/dev/null 2>&1; then
  echo "🐳 Docker مثبت، تشغيل قاعدة البيانات..."
  docker-compose up -d
else
  echo "⚠️ Docker غير مثبت، تخطى تشغيل قاعدة البيانات."
fi

echo "🚀 تشغيل السيرفر..."
npm run dev
