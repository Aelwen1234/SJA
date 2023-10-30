import React, { useState, useEffect } from "react";
import { FaSearch } from 'react-icons/fa';
import './Listcar.css';
import { Car } from '../model/car'
import { useNavigate } from "react-router-dom";

const ListCar = () => {
    const [enterInput, setInput] = useState("");
    const [datamobil, setDatamobil] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            fetch("http://localhost:3000/mobil")
                .then((response) => response.json())
                .then((result) => setDatamobil(result.data))
        }

        fetchData()
    }, [])

    const filtered = datamobil.filter((car) => car.merk.toLowerCase().includes(enterInput.toLowerCase()) || car.tipe.toLowerCase().includes(enterInput.toLowerCase()) || car.tahun.toString().includes(enterInput.toLowerCase()) || car.plat.toLowerCase().includes(enterInput.toLowerCase()))
        .map((car, index) => (
            <div style={{ width: '100%' }}>
                <table className="tabel_mobil" style={{ tableLayout: "fixed" }}>
                    <tbody>
                        <tr key={car._id} onClick={() => {
                            navigate('cardetail', {
                                state: {
                                    id: car._id.toString(),
                                    merk: car.merk,
                                    tipe: car.tipe,
                                    tahun: car.tahun,
                                    jarak_tempuh: car.jarak_tempuh,
                                    warna: car.warna,
                                    bpkb: car.bpkb,
                                    tgl_bpkb: car.tgl_bpkb,
                                    stnk: car.stnk,
                                    tgl_stnk: car.tgl_stnk,
                                    modal_beli: car.modal_beli,
                                    harga_jual: car.harga_jual,
                                    jualataubelum: car.jualataubelum,
                                    plat: car.plat,
                                    bahan_bakar: car.bahan_bakar,
                                    keterangan: car.keterangan,
                                    lokasi: car.lokasi
                                }
                            })
                        }}>
                            <td>{car.merk}</td>
                            <td>{car.tipe}</td>
                            <td>{car.tahun}</td>
                            <td>{car.warna}</td>
                            <td>{car.jarak_tempuh}</td>
                            <td>{car.harga_jual}</td>
                            <td>{car.plat}</td>
                            <td>{car.bahan_bakar}</td>
                            <td>{car.lokasi}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        ))

    return (
        <div className="container">

            <div className="header-list">
                <p style={{ fontWeight: 'bold' }}>List Mobil Sukses Jaya Auto</p>
            </div>

            <div className="input-wrapper">
                <FaSearch id="search-icons" />
                <input type="text" value={enterInput} onChange={(e) => {
                    setInput(e.target.value)
                }} placeholder="Masukkan Merk atau Tipe Mobil" />
            </div>

            <button onClick={() => window.location.reload(false)}>Click to Reload</button>

            <div style={{ paddingTop: '100px', width: '100%', paddingLeft: '20px', paddingRight: '20px' }}>
                <table className="tabel_mobil" style={{ tableLayout: "fixed", border: '10px' }}>
                    <tbody>
                        <tr>
                            <th>Merk</th>
                            <th>Tipe</th>
                            <th>Tahun</th>
                            <th>Warna</th>
                            <th>Jarak Tempuh</th>
                            <th>Harga Jual</th>
                            <th>Plat</th>
                            <th>Bahan Bakar</th>
                            <th>Lokasi Mobil</th>
                        </tr>
                    </tbody>
                </table>

                <div>{filtered}</div>
            </div>



            {/* <div style={{ paddingTop: '100px', width: '100%', paddingLeft: '20px', paddingRight: '20px' }}>
                {
                    enterInput != "" &&
                    <table className="tabel_mobil">
                        <tbody>
                            <tr>
                                <th>Merk</th>
                                <th>Tipe</th>
                                <th>Tahun</th>
                                <th>Warna</th>
                                <th>KM</th>
                                <th>Harga</th>
                                <th>Bahan Bakar</th>
                                <th>Transmisi</th>
                                <th>Kondisi</th>
                                <th>Lokasi</th>
                            </tr>
                            {carList.filter(car => car.model.toLowerCase().includes(enterInput.toLowerCase()) || car.make.toLowerCase().includes(enterInput.toLowerCase()) || car.year.toString().includes(enterInput))
                                .map(car => (
                                    <tr key={car.id} onClick={() => {
                                        detail_mobil(car.id.toString());
                                        navigate('cardetail', {
                                            state: {
                                                id: car.id.toString(),
                                                merk: car.make,
                                                tipe: car.model,
                                                tahun: car.year,
                                                warna: car.color,
                                                km: car.mileage,
                                                harga: car.price,
                                                bahan_bakar: car.fuel_type,
                                                transmisi: car.transmission,
                                                kondisi: car.condition,
                                                lokasi: car.location
                                            }
                                        })
                                    }}>
                                        <td>{car.make}</td>
                                        <td>{car.model}</td>
                                        <td>{car.year}</td>
                                        <td>{car.color}</td>
                                        <td>{car.mileage}</td>
                                        <td>{car.price}</td>
                                        <td>{car.fuel_type}</td>
                                        <td>{car.transmission}</td>
                                        <td>{car.condition}</td>
                                        <td>{car.location}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                }

                {
                    enterInput === "" &&
                    <table className="tabel_mobil">
                        <tbody>
                            <tr>
                                <th>Merk</th>
                                <th>Tipe</th>
                                <th>Tahun</th>
                                <th>Warna</th>
                                <th>KM</th>
                                <th>Harga</th>
                                <th>Bahan Bakar</th>
                                <th>Transmisi</th>
                                <th>Kondisi</th>
                                <th>Lokasi</th>
                            </tr>
                            {carList.filter(car => car.model.toLowerCase().includes(enterInput.toLowerCase()) || car.make.toLowerCase().includes(enterInput.toLowerCase()) || car.year.toString().includes(enterInput))
                                .map(car => (
                                    <tr key={car.id} onClick={() => {
                                        detail_mobil(car.id.toString());
                                        navigate('cardetail', {
                                            state: {
                                                id: car.id.toString(),
                                                merk: car.make,
                                                tipe: car.model,
                                                tahun: car.year,
                                                warna: car.color,
                                                km: car.mileage,
                                                harga: car.price,
                                                bahan_bakar: car.fuel_type,
                                                transmisi: car.transmission,
                                                kondisi: car.condition,
                                                lokasi: car.location
                                            }
                                        })
                                    }}>
                                        <td>{car.make}</td>
                                        <td>{car.model}</td>
                                        <td>{car.year}</td>
                                        <td>{car.color}</td>
                                        <td>{car.mileage}</td>
                                        <td>{car.price}</td>
                                        <td>{car.fuel_type}</td>
                                        <td>{car.transmission}</td>
                                        <td>{car.condition}</td>
                                        <td>{car.location}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                }
            </div> */}

        </div>
    )
}

export default ListCar


