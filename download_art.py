"""
Gnosis Tasmania — Objective Art Batch Downloader
Downloads public domain / CC-licensed images from Wikimedia Commons into
organised folders. Run from the project root:
    python download_art.py
"""

import os
import time
import urllib.request
from pathlib import Path

UA = "GnosisTasmaniaSite/1.0 (trent@humainify.com.au; educational non-commercial; public domain artwork)"

IMAGES = [
    # ── Hero backgrounds ────────────────────────────────────────────────────
    {
        "folder": "hero",
        "filename": "hero_creation_adam.jpg",
        "url": "https://upload.wikimedia.org/wikipedia/commons/e/e0/Creaci%C3%B3n_de_Ad%C3%A1n.jpg",
        "title": "Creation of Adam",
        "artist": "Michelangelo",
        "date": "1512",
        "license": "Public domain",
        "source": "https://commons.wikimedia.org/wiki/File:Creaci%C3%B3n_de_Ad%C3%A1n.jpg",
    },
    {
        "folder": "hero",
        "filename": "hero_school_athens.jpg",
        "url": "https://upload.wikimedia.org/wikipedia/commons/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg",
        "title": "The School of Athens",
        "artist": "Raphael",
        "date": "1511",
        "license": "Public domain",
        "source": "https://commons.wikimedia.org/wiki/File:%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg",
    },
    {
        "folder": "hero",
        "filename": "hero_mystic_lamb.jpg",
        "url": "https://upload.wikimedia.org/wikipedia/commons/a/a8/Hubert_van_Eyck_004.jpg",
        "title": "Adoration of the Mystic Lamb",
        "artist": "Jan & Hubert van Eyck",
        "date": "c. 1432",
        "license": "Public domain",
        "source": "https://commons.wikimedia.org/wiki/File:Hubert_van_Eyck_004.jpg",
    },
    {
        "folder": "hero",
        "filename": "hero_primavera.jpg",
        "url": "https://upload.wikimedia.org/wikipedia/commons/2/25/Sandro_Botticelli_-_La_Primavera_-_Google_Art_Project.jpg",
        "title": "La Primavera",
        "artist": "Sandro Botticelli",
        "date": "c. 1482",
        "license": "Public domain",
        "source": "https://commons.wikimedia.org/wiki/File:Sandro_Botticelli_-_La_Primavera_-_Google_Art_Project.jpg",
    },

    # ── Content section images ───────────────────────────────────────────────
    {
        "folder": "art",
        "filename": "art_blake_jacobs_ladder.jpg",
        "url": "https://upload.wikimedia.org/wikipedia/commons/e/ea/Blake_jacobsladder.jpg",
        "title": "Jacob's Dream (Jacob's Ladder)",
        "artist": "William Blake",
        "date": "c. 1805",
        "license": "Public domain",
        "source": "https://commons.wikimedia.org/wiki/File:Blake_jacobsladder.jpg",
    },
    {
        "folder": "art",
        "filename": "art_bouguereau_angels.jpg",
        "url": "https://upload.wikimedia.org/wikipedia/commons/0/05/William-Adolphe_Bouguereau_%281825-1905%29_-_Song_of_the_Angels_%281881%29.jpg",
        "title": "Song of the Angels (La Chanson des Anges) — Divine Mother with Christ Child",
        "artist": "William-Adolphe Bouguereau",
        "date": "1881",
        "license": "Public domain",
        "source": "https://commons.wikimedia.org/wiki/File:William-Adolphe_Bouguereau_(1825-1905)_-_Song_of_the_Angels_(1881).jpg",
    },
    {
        "folder": "art",
        "filename": "art_cranach_garden_eden.jpg",
        "url": "https://upload.wikimedia.org/wikipedia/commons/4/48/Lucas_Cranach_the_Elder_-_The_Garden_of_Eden_-_Google_Art_Project.jpg",
        "title": "The Garden of Eden — Tree of Life and Knowledge",
        "artist": "Lucas Cranach the Elder",
        "date": "1530",
        "license": "Public domain",
        "source": "https://commons.wikimedia.org/wiki/File:Lucas_Cranach_the_Elder_-_The_Garden_of_Eden_-_Google_Art_Project.jpg",
    },
    {
        "folder": "art",
        "filename": "art_durer_melencolia.jpg",
        "url": "https://upload.wikimedia.org/wikipedia/commons/1/18/D%C3%BCrer_Melancholia_I.jpg",
        "title": "Melencolia I — Hermetic contemplation and sacred geometry",
        "artist": "Albrecht Dürer",
        "date": "1514",
        "license": "Public domain",
        "source": "https://commons.wikimedia.org/wiki/File:D%C3%BCrer_Melancholia_I.jpg",
    },
    # ── Archive / supplementary (not currently used in site) ─────────────────
    {
        "folder": "art",
        "filename": "art_vitruvian_man.jpg",
        "url": "https://upload.wikimedia.org/wikipedia/commons/2/22/Da_Vinci_Vitruve_Luc_Viatour.jpg",
        "title": "Vitruvian Man",
        "artist": "Leonardo da Vinci",
        "date": "c. 1490",
        "license": "CC BY-SA 3.0",
        "source": "https://commons.wikimedia.org/wiki/File:Da_Vinci_Vitruve_Luc_Viatour.jpg",
    },
    {
        "folder": "art",
        "filename": "art_fludd_natura.jpg",
        "url": "https://upload.wikimedia.org/wikipedia/commons/6/63/Robert_Fludd%2C_Integra_naturae_speculum_artisque_imago.jpg",
        "title": "Integrae Naturae Speculum Artisque Imago",
        "artist": "Robert Fludd",
        "date": "1617",
        "license": "CC BY 4.0 (Wellcome Collection)",
        "source": "https://commons.wikimedia.org/wiki/File:Robert_Fludd,_Integra_naturae_speculum_artisque_imago.jpg",
    },
    {
        "folder": "art",
        "filename": "art_khunrath_rebis.jpg",
        "url": "https://upload.wikimedia.org/wikipedia/commons/5/58/Amphitheatrum_sapientiae_aeternae_-_The_hermaphrodite.jpg",
        "title": "The Hermaphrodite / Rebis",
        "artist": "Heinrich Khunrath",
        "date": "1595",
        "license": "Public domain",
        "source": "https://commons.wikimedia.org/wiki/File:Amphitheatrum_sapientiae_aeternae_-_The_hermaphrodite.jpg",
    },
    {
        "folder": "art",
        "filename": "art_rosarium_king_queen.jpg",
        "url": "https://upload.wikimedia.org/wikipedia/commons/8/8f/Woodcut_depicting_the_king_%26_queen_standing_atop_a_sun_%26_moon_Wellcome_L0073562.jpg",
        "title": "King & Queen Upon the Sun and Moon",
        "artist": "Rosarium Philosophorum",
        "date": "c. 1550",
        "license": "CC BY 4.0 (Wellcome Collection)",
        "source": "https://commons.wikimedia.org/wiki/File:Woodcut_depicting_the_king_%26_queen_standing_atop_a_sun_%26_moon_Wellcome_L0073562.jpg",
    },

    # ── Gallery images ───────────────────────────────────────────────────────
    {
        "folder": "gallery",
        "filename": "art_birth_venus.jpg",
        # 3000 px thumbnail — full file is 211 MB
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/3000px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg",
        "title": "Birth of Venus (La nascita di Venere)",
        "artist": "Sandro Botticelli",
        "date": "c. 1484–1486",
        "license": "Public domain",
        "source": "https://commons.wikimedia.org/wiki/File:Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg",
    },
    {
        "folder": "gallery",
        "filename": "art_mona_lisa.jpg",
        # 2000 px thumbnail — full file is 90 MB
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/2000px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
        "title": "Mona Lisa (La Gioconda)",
        "artist": "Leonardo da Vinci",
        "date": "c. 1503–1519",
        "license": "Public domain",
        "source": "https://commons.wikimedia.org/wiki/File:Mona_Lisa,_by_Leonardo_da_Vinci,_from_C2RMF_retouched.jpg",
    },
    {
        "folder": "gallery",
        "filename": "art_lamentation.jpg",
        "url": "https://upload.wikimedia.org/wikipedia/commons/b/bd/Sandro_botticelli%2C_compianto_sul_cristo_morto%2C_1495-1500_ca._02.JPG",
        "title": "Lamentation over the Dead Christ",
        "artist": "Sandro Botticelli",
        "date": "c. 1495–1500",
        "license": "CC BY 3.0",
        "source": "https://commons.wikimedia.org/wiki/File:Sandro_botticelli,_compianto_sul_cristo_morto,_1495-1500_ca._02.JPG",
    },
    {
        "folder": "gallery",
        "filename": "art_rosarium_conjunction.jpg",
        "url": "https://upload.wikimedia.org/wikipedia/commons/4/44/Image_depicting_the_holy_wedding_or_conjunction_Wellcome_L0073564.jpg",
        "title": "The Holy Conjunction — King & Queen",
        "artist": "Rosarium Philosophorum",
        "date": "c. 1550",
        "license": "CC BY 4.0 (Wellcome Collection)",
        "source": "https://commons.wikimedia.org/wiki/File:Image_depicting_the_holy_wedding_or_conjunction_Wellcome_L0073564.jpg",
    },
    {
        "folder": "gallery",
        "filename": "art_fludd_summum.jpg",
        "url": "https://upload.wikimedia.org/wikipedia/commons/9/96/Fludd_summum_bonum.jpg",
        "title": "Summum Bonum",
        "artist": "Robert Fludd",
        "date": "c. 1629",
        "license": "Public domain",
        "source": "https://commons.wikimedia.org/wiki/File:Fludd_summum_bonum.jpg",
    },
    {
        "folder": "gallery",
        "filename": "art_lady_ermine.jpg",
        # 1500 px thumbnail — full file is 102 MB
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Lady_with_an_Ermine_-_Leonardo_da_Vinci_-_Google_Art_Project.jpg/1500px-Lady_with_an_Ermine_-_Leonardo_da_Vinci_-_Google_Art_Project.jpg",
        "title": "Lady with an Ermine",
        "artist": "Leonardo da Vinci",
        "date": "c. 1490",
        "license": "Public domain",
        "source": "https://commons.wikimedia.org/wiki/File:Lady_with_an_Ermine_-_Leonardo_da_Vinci_-_Google_Art_Project.jpg",
    },
]

OUTPUT_ROOT = Path("src/assets")

def download(item: dict, delay: float = 5.0) -> None:
    dest_dir = OUTPUT_ROOT / item["folder"]
    dest_dir.mkdir(parents=True, exist_ok=True)
    dest = dest_dir / item["filename"]

    if dest.exists():
        print(f"  [skip] {item['filename']} already exists")
        return

    print(f"  Downloading {item['filename']}  ({item['artist']}, {item['date']})")
    req = urllib.request.Request(item["url"], headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=60) as resp, open(dest, "wb") as f:
        f.write(resp.read())
    size_kb = dest.stat().st_size // 1024
    print(f"  ✓ Saved {item['filename']}  ({size_kb} KB)")
    time.sleep(delay)

def main():
    print(f"Output root: {OUTPUT_ROOT.resolve()}")
    print(f"Downloading {len(IMAGES)} images...\n")
    for item in IMAGES:
        try:
            download(item)
        except Exception as exc:
            print(f"  [ERROR] {item['filename']}: {exc}")
    print("\nDone.")

if __name__ == "__main__":
    main()
