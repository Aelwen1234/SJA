import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Popup from "reactjs-popup";
import './Cardetail.css';

const edit = () => {
    const routeparams = useLocation();
    const navigate = useNavigate();

    const [jarak_tempuh, setJarak_tempuh] = useState(routeparams.state.jarak_tempuh)
    const [bpkb, setBpkb] = useState(routeparams.state.bpkb)
    const [tgl_bpkb, setTgl_bpkb] = useState(routeparams.state.tgl_bpkb)
    const [stnk, setStnk] = useState(routeparams.state.stnk)
    const [tgl_stnk, setTgl_stnk] = useState(routeparams.state.tgl_stnk)
    const [modal_beli, setModal_beli] = useState(routeparams.state.modal_beli)
    const [harga_jual, setHarga_jual] = useState(routeparams.state.harga_jual)
    const [jualataubelum, setJualataubelum] = useState(routeparams.state.jualataubelum)
    const [plat, setPlat] = useState(routeparams.state.plat)
    const [bahan_bakar, setBahan_bakar] = useState(routeparams.state.bahan_bakar)
    const [keterangan, setKeterangan] = useState(routeparams.state.keterangan)


    const handleEdit = async () => {
        const body_jarak_tempuh = jarak_tempuh
        const body_modal_beli = modal_beli
        const body_harga_jual = harga_jual
        const body_jualataubelum = jualataubelum
        const body_plat = plat
        const body_bahan_bakar = bahan_bakar
        const body_keterangan = keterangan

        fetch("http://localhost:3000/mobil/" + routeparams.state.id, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                jarak_tempuh: body_jarak_tempuh,
                modal_beli: body_modal_beli,
                harga_jual: body_harga_jual,
                jualataubelum: body_jualataubelum,
                plat: body_plat,
                bahan_bakar: body_bahan_bakar,
                keterangan: body_keterangan
            })
        })
            .then((response) => response.json())
            .then(res => console.log(res))
            .then(navigate('SJA/'))
    }

    return (
        <div>
            <form onSubmit={handleEdit}>
                <label>Plat
                    <input required type="text" value={plat} onChange={(input) => setPlat(input.target.value)} />
                </label>

                <label>Jarak Tempuh
                    <input required type="number" value={jarak_tempuh} onChange={(input) => setJarak_tempuh(input.target.value)} />
                </label>

                <label>Bahan Bakar
                    <select required value={bahan_bakar} onChange={(input) => setBahan_bakar(input.target.value)}>
                        <option value="Petrol">Petrol</option>
                        <option value="Diesel">Diesel</option>
                        <option value="Electricity">Electricity</option>
                        <option value="Hybrdid">Hybrid</option>
                    </select>
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

                <label>Keterangan tambahan
                    <textarea value={keterangan} onChange={(input) => setKeterangan(input.target.value)} />
                </label>

                <button>Submit</button>

            </form>
        </div>
    )
}

export default edit