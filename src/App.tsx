import clsx from "clsx";

const todo = [
  {jumlah: 1, namaBarang: "Sprite", checked: false},
  {jumlah: 2, namaBarang: "Coca-cola", checked: true},
  {jumlah: 5, namaBarang: "Mie", checked: true},
  {jumlah: 10, namaBarang: "Beng-beng", checked: false},
  {jumlah: 3, namaBarang: "Telur", checked: false},
]

const App = () => {
  return (
    <div
      className={clsx(
        "min-h-screen",
        "bg-gray-100",
        "text-slate-900",
        "p-5",
      )}
    >
      <main
        className={clsx(
          "max-w-2xl",
          "mx-auto",
          "bg-gray-200",
        )}
      >
        <header
          className={clsx(
            "border-b border-gray-300",
            "py-3 px-5",
          )}
        >
          <h1
            className={clsx(
              "text-center",
              "font-bold",
              "text-3xl",
            )}
          >
            Catatan Belanja
          </h1>
        </header>
        <div
          className={clsx(
            "p-5",
          )}
        >
          <div
            className={clsx(
              "flex flex-row",
              "justify-between items-center",
              "mb-8",
            )}
          >
            <p
              className={clsx(
                "text-lg",
              )}
            >
              Belanja apa kita hari ini ?
            </p>
            <select
              className={clsx(
                "bg-white",
                "px-3 py-1",
                "rounded-md",
              )}
            >
              {[...Array(10).keys()].map((item) => (
                <option key={item}>{item + 1}</option>
              ))}
            </select>
            <input
              className={clsx(
                "px-3 py-1",
                "rounded-md",
              )}
              placeholder="Nama barang"
            />
            <button
              className={clsx(
                "px-3 py-1",
                "bg-black",
                "text-white",
                "rounded-md",
              )}
              type="button"
            >
              Tambah
            </button>
          </div>
          <div
            className={clsx(
              "space-y-5",
            )}
          >
            <div
              className={clsx(
                "flex",
                "justify-between",
                "divide-x divide-gray-300",
              )}
            >
              <p className={clsx("text-center flex-1")}>Jumlah</p>
              <p className={clsx("text-center flex-1")}>Nama Barang</p>
              <p className={clsx("text-center flex-1")}>Action</p>
            </div>
            {todo.map((item, index) => (
              <div
                key={index}
                className={clsx(
                  "flex",
                  "justify-between",
                  "divide-x divide-gray-300",
                )}
              >
                <p className={clsx("text-center flex-1")}>{item.jumlah}</p>
                <p className={clsx("text-center flex-1")}>{item.namaBarang}</p>
                <div className={clsx("text-center flex-1")}>

                  <input type="checkbox" checked={item.checked} />
                  
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className={clsx(
            "border-t border-gray-300",
            "p-5",
            "flex flex-row justify-center items-center",
            "space-x-5"
          )}
        >
          <select className={clsx(
            "px-3 py-1",
            "bg-white",
            "rounded-md"
          )}>
            <option>Urutkan berdasarkan urutan input</option>
          </select>
          <button type="button" className={clsx(
            "px-3 py-1",
            "bg-black",
            "text-white",
            "rounded-md"
          )}>Bersihkan daftar</button>
        </div>
        <div
          className={clsx(
            "border-t border-gray-300",
            "p-5",
            "flex flex-row justify-center items-center",
            "space-x-5"
          )}
        >
          <p>Ada 10 barang di daftar belanjaan, 5 barang sudah di beli (50%)</p>
          
        </div>
      </main>
    </div>
  );
};

export default App;
