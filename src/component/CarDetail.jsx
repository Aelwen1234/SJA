import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Popup from "reactjs-popup";
import './Cardetail.css';

const detail = () => {
    const routeparams = useLocation();
    const navigate = useNavigate();

    const handleDelete = () => {
        fetch("http://localhost:3000/mobil/" + routeparams.state.id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then(res => console.log(res))
            .then(navigate('/'))
    }

    return (
        <>
            <table className="tabel_detailmobil">
                <tbody>
                    <tr>
                        <th>Merk</th>
                        <th>{routeparams.state.merk}</th>
                    </tr>

                    <tr>
                        <th>Tipe</th>
                        <th>{routeparams.state.tipe}</th>
                    </tr>

                    <tr>
                        <th>Tahun</th>
                        <th>{routeparams.state.tahun}</th>
                    </tr>

                    <tr>
                        <th>Warna</th>
                        <th>{routeparams.state.warna}</th>
                    </tr>

                    <tr>
                        <th>Jarak Tempuh</th>
                        <th>{routeparams.state.jarak_tempuh}</th>
                    </tr>

                    <tr>
                        <th>BPKB</th>
                        <th>{routeparams.state.bpkb.toString()}</th>
                    </tr>

                    <tr>
                        <th>Tanggal Masuk BPKB</th>
                        <th>{routeparams.state.tgl_bpkb}</th>
                    </tr>

                    <tr>
                        <th>STNK</th>
                        <th>{routeparams.state.stnk.toString()}</th>
                    </tr>

                    <tr>
                        <th>Tanggal Masuk STNK</th>
                        <th>{routeparams.state.tgl_stnk}</th>
                    </tr>

                    <tr>
                        <th>Modal Beli</th>
                        <th>{routeparams.state.modal_beli}</th>
                    </tr>

                    <tr>
                        <th>Harga Jual</th>
                        <th>{routeparams.state.harga_jual}</th>
                    </tr>

                    <tr>
                        <th>Jual Atau Belum</th>
                        <th>{routeparams.state.jualataubelum.toString()}</th>
                    </tr>

                    <tr>
                        <th>Plat</th>
                        <th>{routeparams.state.plat}</th>
                    </tr>

                    <tr>
                        <th>Bahan Bakar</th>
                        <th>{routeparams.state.bahan_bakar}</th>
                    </tr>

                    <tr>
                        <th>Keterangan</th>
                        <th>{routeparams.state.keterangan}</th>
                    </tr>
                </tbody>
            </table>

            <div style={{ color: "red" }}>
                <button style={{ fontWeight: 'bold' }} onClick={() => {
                    navigate('caredit', {
                        state: {
                            id: routeparams.state.id.toString(),
                            merk: routeparams.state.merk,
                            tipe: routeparams.state.tipe,
                            tahun: routeparams.state.tahun,
                            jarak_tempuh: routeparams.state.jarak_tempuh,
                            warna: routeparams.state.warna,
                            modal_beli: routeparams.state.modal_beli,
                            harga_jual: routeparams.state.harga_jual,
                            jualataubelum: routeparams.state.jualataubelum,
                            plat: routeparams.state.plat,
                            bahan_bakar: routeparams.state.bahan_bakar,
                            keterangan: routeparams.state.keterangan
                        }
                    })
                }}>
                    EDIT CAR
                </button>
            </div>

            <div style={{ color: "red" }}>
                <button style={{ fontWeight: 'bold' }} onClick={() => {
                    navigate('dataedit', {
                        state: {
                            id: routeparams.state.id.toString(),
                            bpkb: routeparams.state.bpkb,
                            tgl_bpkb: routeparams.state.tgl_bpkb,
                            stnk: routeparams.state.stnk,
                            tgl_stnk: routeparams.state.tgl_stnk,
                            lokasi: routeparams.state.lokasi,
                            keterangan: routeparams.state.keterangan
                        }
                    })
                }}>
                    EDIT DATA
                </button>
            </div>

            <div style={{ color: "red" }}>
                <Popup trigger={<button style={{ fontWeight: 'bolder' }}>DELETE DATA</button>} position="center center">
                    {
                        close => (
                            <div style={{ placeItems: 'center', backgroundColor: 'white' }}>
                                <div>
                                    Are you sure to delete this data?
                                </div>
                                <button onClick={handleDelete} style={{ fontWeight: 'bold' }}>
                                    DELETE DATA
                                </button>

                                <button onClick={() => close()}>
                                    TIDAK JADI DELETE
                                </button>
                            </div>
                        )
                    }
                </Popup>
            </div>
        </>
    )
}

export default detail