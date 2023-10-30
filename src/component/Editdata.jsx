import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Popup from "reactjs-popup";
import './Cardetail.css';

const editdata = () => {
    const routeparams = useLocation();
    const navigate = useNavigate();

    const [bpkb, setBpkb] = useState(routeparams.state.bpkb)
    const [tgl_bpkb, setTgl_bpkb] = useState(routeparams.state.tgl_bpkb)
    const [stnk, setStnk] = useState(routeparams.state.stnk)
    const [tgl_stnk, setTgl_stnk] = useState(routeparams.state.tgl_stnk)
    const [lokasi, setLokasi] = useState(routeparams.state.lokasi)
    const [keterangan, setKeterangan] = useState(routeparams.state.keterangan)


    const handleEdit = async () => {
        const body_bpkb = bpkb
        const body_tgl_bpkb = tgl_bpkb
        const body_stnk = stnk
        const body_tgl_stnk = tgl_stnk
        const body_lokasi = lokasi
        const body_keterangan = keterangan

        fetch("http://localhost:3000/mobil/" + routeparams.state.id, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                bpkb: body_bpkb,
                tgl_bpkb: body_tgl_bpkb,
                stnk: body_stnk,
                tgl_stnk: body_tgl_stnk,
                lokasi: body_lokasi,
                keterangan: body_keterangan
            })
        })
            .then((response) => response.json())
            .then(res => console.log(res))
            .then(navigate('/'))
    }

    return (
        <div>
            <form onSubmit={handleEdit}>

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

export default editdata