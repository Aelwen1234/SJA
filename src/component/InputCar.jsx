import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const InputCar = () => {

    const [merk, setMerk] = useState("")
    const [tipe, setTipe] = useState("")
    const [tahun, setTahun] = useState(Number)
    const [warna, setWarna] = useState("")
    const [jarak_tempuh, setJarak_tempuh] = useState(Number)
    const [bpkb, setBpkb] = useState(false)
    const [tgl_bpkb, setTgl_bpkb] = useState(Date)
    const [stnk, setStnk] = useState(false)
    const [tgl_stnk, setTgl_stnk] = useState(Date)
    const [modal_beli, setModal_beli] = useState(Number)
    const [harga_jual, setHarga_jual] = useState(Number)
    const [jualataubelum, setJualataubelum] = useState(Boolean)
    const [plat, setPlat] = useState("")
    const [bahan_bakar, setBahan_bakar] = useState(String)
    const [keterangan, setKeterangan] = useState("")
    const [lokasi, setLokasi] = useState("")

    const navigate = useNavigate()


    const handleSubmit = async () => {
        const body_merk = merk
        const body_tipe = tipe
        const body_tahun = tahun
        const body_warna = warna
        const body_jarak_tempuh = jarak_tempuh
        const body_bpkb = bpkb
        const body_tgl_bpkb = tgl_bpkb
        const body_stnk = stnk
        const body_tgl_stnk = tgl_stnk
        const body_modal_beli = modal_beli
        const body_harga_jual = harga_jual
        const body_jualataubelum = jualataubelum
        const body_plat = plat
        const body_bahan_bakar = bahan_bakar
        const body_keterangan = keterangan
        const body_lokasi = lokasi

        fetch('http://localhost:3000/mobil', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                merk: body_merk,
                tipe: body_tipe,
                tahun: body_tahun,
                warna: body_warna,
                jarak_tempuh: body_jarak_tempuh,
                bpkb: body_bpkb,
                tgl_bpkb: body_tgl_bpkb,
                stnk: body_stnk,
                tgl_stnk: body_tgl_stnk,
                modal_beli: body_modal_beli,
                harga_jual: body_harga_jual,
                jualataubelum: body_jualataubelum,
                plat: body_plat,
                bahan_bakar: body_bahan_bakar,
                keterangan: body_keterangan,
                lokasi: body_lokasi
            })
        })
            .then(response => response.json())
            .then(res => console.log(res))
            .then(navigate('SJA/'))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Merk
                    <select required value={merk} onChange={(input) => setMerk(input.target.value)}>
                        <option value="Audi">Audi</option>
                        <option value="BMW">BMW</option>
                        <option value="Chery">Chery</option>
                        <option value="Citroen">Citroen</option>
                        <option value="Daihatsu">Daihatsu</option>
                        <option value="DFSK">DFSK</option>
                        <option value="Ford">Ford</option>
                        <option value="Honda">Honda</option>
                        <option value="Hyundai">Hyundai</option>
                        <option value="Isuzu">Isuzu</option>
                        <option value="Jaguar">Jaguar</option>
                        <option value="Jeep">Jeep</option>
                        <option value="KIA">KIA</option>
                        <option value="Lexus">Lexus</option>
                        <option value="Mahindra">Mahindra</option>
                        <option value="Maserati">Maserati</option>
                        <option value="Mazda">Mazda</option>
                        <option value="Mercedes-Benz">Mercedes-Benz</option>
                        <option value="MG">MG</option>
                        <option value="Mini">Mini</option>
                        <option value="Mitsubishi">Mitsubishi</option>
                        <option value="Nissan">Nissan</option>
                        <option value="Ora">Ora</option>
                        <option value="Peugeot">Peugeot</option>
                        <option value="Renault">Renault</option>
                        <option value="Subaru">Subaru</option>
                        <option value="Suzuki">Suzuki</option>
                        <option value="Tata">Tata</option>
                        <option value="Toyota">Toyota</option>
                        <option value="Volkswagen">Volkswagen</option>
                        <option value="Volvo">Volvo</option>
                        <option value="Wuling">Wuling</option>
                    </select>
                </label>

                <label>Tipe
                    <input required type="text" value={tipe} onChange={(input) => setTipe(input.target.value)} />
                </label>

                <label>Plat
                    <input required type="text" value={plat} onChange={(input) => setPlat(input.target.value)} />
                </label>

                <label>Tahun
                    <input required type="number" value={tahun} onChange={(input) => setTahun(input.target.value)} />
                </label>

                <label>Jarak Tempuh
                    <input required type="number" value={jarak_tempuh} onChange={(input) => setJarak_tempuh(input.target.value)} />
                </label>

                <label>Warna
                    <input required type="text" value={warna} onChange={(input) => setWarna(input.target.value)} />
                </label>

                <label>Bahan Bakar
                    <select required value={bahan_bakar} onChange={(input) => setBahan_bakar(input.target.value)}>
                        <option value="Petrol">Petrol</option>
                        <option value="Diesel">Diesel</option>
                        <option value="Electricity">Electricity</option>
                        <option value="Hybrdid">Hybrid</option>
                    </select>
                </label>

                <label>BPKB
                    <select required value={bpkb} onChange={(input) => setBpkb(input.target.value)}>
                        <option value={true}>Ada</option>
                        <option value={false}>Tidak ada</option>
                    </select>
                </label>

                <label>Tanggal Masuk BPKB
                    <input required type="date" value={tgl_bpkb} onChange={(input) => setTgl_bpkb(input.target.value)} />
                </label>

                <label>STNK
                    <select required value={stnk} onChange={(input) => setStnk(input.target.value)}>
                        <option value={true}>Ada</option>
                        <option value={false}>Tidak ada</option>
                    </select>
                </label>

                <label>Tanggal Masuk STNK
                    <input required type="date" value={tgl_stnk} onChange={(input) => setTgl_stnk(input.target.value)} />
                </label>

                <label>Modal Beli
                    <input required type="number" value={modal_beli} onChange={(input) => setModal_beli(input.target.value)} />
                </label>

                <label>Harga Jual
                    <input required type="number" value={harga_jual} onChange={(input) => setHarga_jual(input.target.value)} />
                </label>

                <label>Apakah Mobil Sudah Terjual?
                    <select required value={jualataubelum} onChange={(input) => setJualataubelum(input.target.value)}>
                        <option value={true}>Sudah</option>
                        <option value={false}>Belum</option>
                    </select>
                </label>

                <label>Lokasi Mobil
                    <input required type="text" value={lokasi} onChange={(input) => setLokasi(input.target.value)} />
                </label>

                <label>Keterangan tambahan
                    <textarea value={keterangan} onChange={(input) => setKeterangan(input.target.value)} />
                </label>

                <button>Submit</button>

            </form>
        </div>
    )
}

export default InputCar