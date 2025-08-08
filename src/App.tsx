import { useState } from "react";

export default function App() {
  const [pantalla, setPantalla] = useState('')

  let listaNumeros = [
    1, 2, 3, 'c',
    4, 5, 6, '+',
    7, 8, 9, '-',
    0, '/', '*', '=']

  const operaciones = (prompt: HTMLDivElement) => {
    alert(prompt.innerHTML)
  }
  const colorClase = (num: any) => {
    if (typeof (num) == 'number') return `bg-gray-700 text-white p-2 size-30 font-semibold rounded-md text-5xl cursor-pointer hover:bg-gray-200 hover:text-black border-1 border-gray-700 hover:border-gray-700 mx-auto`

    if (typeof (num) == 'string' && num != '=' && num != 'c') return `bg-blue-700 text-white p-2 size-30 font-semibold rounded-md text-5xl cursor-pointer hover:bg-blue-200 hover:text-black border-1 border-blue-700 hover:border-blue-700 mx-auto`

    if ((num) == '=') return `bg-orange-700 text-white p-2 size-30 font-semibold rounded-md text-5xl cursor-pointer hover:bg-orange-200 hover:text-orange-700 border-1 border-orange-700 hover:border-orange-700 mx-auto`

    if ((num) == 'c') return `bg-red-600 text-white p-2 size-30 font-semibold rounded-md text-5xl cursor-pointer hover:bg-red-200 hover:text-red-600 border-1 border-red-600 hover:border-red-600 mx-auto`
  }

  const numeros = () => {
    const numero = (num: number | string) => {
      let panel: any = document.getElementById('input')
      let accion = () => {
        if (num != '=' && num != 'c') setPantalla(panel.append(num))
        if (num == 'c') {
          setPantalla(panel.textContent = '')
          setPantalla(panel.append(''))
        }
        if (num == '=') {
          setPantalla(panel.textContent = '')
          setPantalla(panel.append(operaciones(panel)))
        }
      }
      return (<button
        id={`${num}`}
        onClick={accion}
        className={colorClase(num)}>
        {num}</button>)
    }

    return listaNumeros.map(element => {
      return numero(element)
    });
  }

  return (
    <>
      <div className="w-fit mx-auto rounded-md flex flex-col gap-10 bg-gray-400 p-10">
        <div id='input' className="mx-auto bg-white rounded-md border-1 p-2 text-4xl w-135 h-20 m-2 content-center"></div>
        <section className="grid grid-cols-4 w-fit gap-5 mx-auto">
          {numeros()}
        </section>
      </div>
    </>
  )
}


