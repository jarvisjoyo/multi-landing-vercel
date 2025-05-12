#!/bin/bash

# List folder tujuan yang akan dideploy ke Vercel
FOLDERS=(lxtoto1 lxtoto2 lxtoto3)

# Proses copy dari base-landing ke masing-masing folder
for folder in "${FOLDERS[@]}"; do
  echo "⏳ Mengupdate folder: $folder ..."
  rm -rf "$folder"
  mkdir -p "$folder"
  rsync -a --exclude=".next" --exclude="node_modules" base-landing/ "$folder/"
  echo "✅ Selesai: $folder"
done

echo "🚀 Semua folder sudah ter-update dari base-landing."
