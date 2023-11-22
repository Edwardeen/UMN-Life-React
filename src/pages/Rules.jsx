function Rules() {
  return (
    <div className="border border-2 my-5 px-5 py-3 w-50 containerBox">
      <h3 className="text-center">RULES</h3>
      <ul className="mt-4">
        <li>5 menit dalam game = 1 detik di dunia nyata.</li>
        <li>
          Ada 4 status yang harus diperhatikan, yaitu: Makan, Tidur, Main, dan
          Belajar.
        </li>
        <li>
          Pemain bisa berpindah lokasi dari rumah ke kampus, kafe, dan
          supermarket. Di tiap lokasi pemain memiliki batasan dalam pilihan
          aktifitas yang bisa diambil.
        </li>
        <li>
          Player memiliki uang yang dapat digunakan untuk membeli makanan atau
          minuman di supermarket dan kafe.
        </li>
        <li>Player akan mati jika status bar makan dibiarkan kosong terus.</li>
        <li>
          Player akan di DO jika status bar belajar dibiarkan kosong terus.
        </li>
        <li>
          Ada syarat status yang harus dipenuhi untuk pemain bisa melakukan
          aktifitas makan, tidur, main dan belajar.
          <ul>
            <li>
              Aktivitas makan dapat dilakukan bila ada makanan di inventory.
              Jika tidak harus beli makanan terlebih dahulu di supermarket atau
              langsung makan di kafe.
            </li>
            <li>
              Aktivitas main dapat dilakukan bila nilai status bar dari makan
              dan tidur tinggi.
            </li>
            <li>
              Aktifitas belajar dapat dilakukan bila nilai status bar dari tidur
              tidak kosong.
            </li>
          </ul>
        </li>
        <li>Have fun!</li>
      </ul>
    </div>
  );
}

export default Rules;
