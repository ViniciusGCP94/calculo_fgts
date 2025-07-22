import React from 'react'
import { useState } from 'react';
import { formatarMoeda } from '../../services/FormatCoin';
{/*import CurrencyInput from 'react-currency-input-field';*/}

const InstitutionSelector = () => {
    const [valor, setValor] = useState('');

    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100 border-2 border-red-500">
                <h1 className="text-2xl font-bold mb-4 w-80">Selecione uma Instituição</h1>
                <label className="w-80 text-gray-600 text-lg-start">
                    Busque sua instituição cadastrada
                </label>
                <input
                    type="text"
                    placeholder="Digite o nome da instituição"
                    className="w-80 px-4 py-2 border border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required={true}
                />
                <label className="text-gray-600 text-lg-start w-80">
                    Tipo de Instituição
                </label>
                <select className="w-80 text-lg-start px-4 py-2 border border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                    <option style={{ fontSize: '0.6rem' }} value="">Todos os tipos</option>
                    <option style={{ fontSize: '0.6rem' }} value="banco">Banco</option>
                    <option style={{ fontSize: '0.6rem' }} value="financeira">Financeira</option>
                    <option style={{ fontSize: '0.6rem' }} value="cartao">Cartão de Crédito</option>
                    <option style={{ fontSize: '0.6rem' }} value="cooperativa">Cooperativa</option>
                    <option style={{ fontSize: '0.6rem' }} value="outros">Outros</option>
                </select>
                <label className="text-gray-600 text-lg-start w-80">
                    Valor a ser adiantado
                </label>
                <input
                    type="text"
                    value={valor}
                    onChange={(e) => setValor(formatarMoeda(e.target.value))}
                    className="w-80 px-4 py-2 border rounded text-left"
                    placeholder="R$ 0,00"
                    required={true}
                />
                <button onClick className='w-60 text-2xl text-gray-400 hover:text-gray-600 mr-20 mt-10 border border-black' >Resultado</button>
            
            </div>

            {/* Conforme for preenchendo o nome da instituição, deve aparecer uma lista para ajuda com informações sobre */}
            {/* Após a instituição e o valor serem preenchidos deve aparecer o botão "Cálculo"  */}
        </>
    )
}

export default InstitutionSelector