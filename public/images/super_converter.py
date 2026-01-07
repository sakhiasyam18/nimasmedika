import os
import tkinter as tk
from tkinter import messagebox
from PIL import Image, ImageTk
import pillow_avif  # Pastikan sudah: pip install pillow-avif-plugin

# --- KONFIGURASI FINAL ---
FOLDER_PATH = "./"       
MAX_DIMENSION = 1200     # Saya naikkan sedikit ke 1200px biar makin tajam di layar Retina
AVIF_QUALITY = 65        # Naikkan dikit biar makin bening, size tetap aman
TARGET_SIZE_KB = 100     # Target batas aman
# -----------------------

class SuperConverterApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Nimas Medika - Smart AVIF Converter")
        self.root.geometry("800x650")

        # Ambil file selain AVIF
        self.files = [f for f in os.listdir(FOLDER_PATH) 
                      if f.lower().endswith(('.png', '.jpg', '.jpeg', '.webp')) 
                      and not f.endswith('.avif')]
        self.files.sort()
        self.current_index = 0

        # UI Components
        self.lbl_image = tk.Label(root, text="No Image", bg="#2c3e50")
        self.lbl_image.pack(pady=10, fill=tk.BOTH, expand=True)

        self.info_frame = tk.Frame(root)
        self.info_frame.pack(pady=5)
        
        self.lbl_filename = tk.Label(self.info_frame, text="File Asli:", font=("Segoe UI", 10))
        self.lbl_filename.pack()
        
        self.lbl_feedback = tk.Label(root, text="Siap memproses...", font=("Segoe UI", 10, "italic"), fg="blue")
        self.lbl_feedback.pack(pady=2)

        self.entry_name = tk.Entry(root, font=("Segoe UI", 14), width=40, justify='center')
        self.entry_name.pack(pady=5)
        self.entry_name.bind("<Return>", self.process_image) 

        self.btn_skip = tk.Button(root, text="Skip Gambar Ini (Jangan Proses)", command=self.skip_image, bg="#ffcccb")
        self.btn_skip.pack(pady=5)

        self.lbl_status = tk.Label(root, text=f"Antrian: {len(self.files)} gambar", fg="gray")
        self.lbl_status.pack(pady=10)

        self.load_image()

    def load_image(self):
        if self.current_index >= len(self.files):
            messagebox.showinfo("Selesai", "Semua tugas selesai! Cek foldernya.")
            self.root.destroy()
            return

        filename = self.files[self.current_index]
        
        # Tampilkan info
        self.lbl_filename.config(text=f"Asli: {filename}")
        
        # Auto-fill nama asli (tanpa ekstensi)
        name_without_ext = os.path.splitext(filename)[0]
        self.entry_name.delete(0, tk.END)
        self.entry_name.insert(0, name_without_ext)
        self.entry_name.focus_set() # Langsung siap ketik/enter

        # Preview Gambar
        try:
            img_path = os.path.join(FOLDER_PATH, filename)
            img = Image.open(img_path)
            img.thumbnail((700, 450)) # Preview saja
            photo = ImageTk.PhotoImage(img)
            self.lbl_image.config(image=photo)
            self.lbl_image.image = photo
        except Exception as e:
            self.lbl_image.config(text=f"Error: {e}")

    def skip_image(self):
        self.lbl_feedback.config(text="Gambar dilewati.", fg="orange")
        self.current_index += 1
        self.load_image()

    def process_image(self, event=None):
        old_filename = self.files[self.current_index]
        new_base_name = self.entry_name.get().strip()
        
        if not new_base_name:
            return # Cegah enter kosong

        new_filename = f"{new_base_name}.avif"
        old_path = os.path.join(FOLDER_PATH, old_filename)
        new_path = os.path.join(FOLDER_PATH, new_filename)

        try:
            img = Image.open(old_path)
            
            # Handle Transparency & Mode
            if img.mode not in ("RGB", "RGBA"):
                img = img.convert("RGBA") if "transparency" in img.info else img.convert("RGB")

            # SMART RESIZE: Hanya kecilkan jika melebihi batas
            if img.width > MAX_DIMENSION or img.height > MAX_DIMENSION:
                img.thumbnail((MAX_DIMENSION, MAX_DIMENSION), Image.Resampling.LANCZOS)
            
            # CONVERT & SAVE
            # quality=AVIF_QUALITY (65) -> Balance terbaik
            # speed=6 -> Encoding speed balanced (biar gak lemot nungguinnya)
            img.save(new_path, "AVIF", quality=AVIF_QUALITY, speed=6)
            
            # CEK UKURAN HASIL
            result_size_kb = os.path.getsize(new_path) / 1024
            
            if result_size_kb > TARGET_SIZE_KB:
                msg = f"⚠️ Hasil: {result_size_kb:.1f} KB (Agak besar, mungkin gambar rumit)"
                color = "orange"
            else:
                msg = f"✅ Sukses: {result_size_kb:.1f} KB (Mantap!)"
                color = "green"

            self.lbl_feedback.config(text=f"{old_filename} -> {new_filename} | {msg}", fg=color)
            print(f"Processed: {new_filename} ({result_size_kb:.1f} KB)")

            # Pindah ke gambar berikutnya
            self.current_index += 1
            self.root.after(500, self.load_image) # Delay dikit biar sempat baca status sukses

        except Exception as e:
            messagebox.showerror("Gagal", str(e))

if __name__ == "__main__":
    root = tk.Tk()
    app = SuperConverterApp(root)
    root.mainloop()