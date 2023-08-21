import { Dispatch, SetStateAction, useEffect } from 'react'
import { Minus, Plus } from 'phosphor-react'

interface CounterProps {
  set: Dispatch<SetStateAction<number>>
  setted: number
  itemId: string
}

export function CounterProduct({ itemId, set, setted }: CounterProps) {
  useEffect(() => {
    saveProduct()
  }, [setted])

  function saveProduct() {
    sessionStorage.setItem('id', itemId)
    sessionStorage.setItem('quantity', `${setted}`)
  }

  function increment() {
    set(setted + 1)
  }

  function decrement() {
    setted <= 1 ? <></> : set(setted - 1)
  }

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <p className="mb-5 text-sm text-[#862924]">Quantidade</p>
      <div className="flex gap-5 ">
        <button>
          <Minus size={20} className="cursor-pointer" onClick={decrement} />
        </button>
        {setted}
        <button>
          <Plus size={20} className="cursor-pointer" onClick={increment} />
        </button>
      </div>
    </div>
  )
}
