import Link from "next/link"
import { ChevronLeft, Trash2, Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function CartPage() {
  // This would normally come from a cart state or API
  const cartItems = [
    { id: 1, name: "Produto Purple Premium", price: 1750, quantity: 1, color: "bg-purple-700" },
    { id: 2, name: "Produto Azul", price: 1750, quantity: 2, color: "bg-blue-700" },
  ]

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = 15.9
  const total = subtotal + shipping

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container mx-auto px-4 py-3">
          <Link href="/" className="inline-flex items-center text-sm font-medium">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Continuar Comprando
          </Link>
        </div>
      </header>

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold mb-6">Carrinho de Compras</h1>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              {cartItems.length > 0 ? (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4 p-4 border rounded-lg">
                      <div className={`${item.color} rounded-lg h-20 w-20 flex-shrink-0`}></div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="font-bold">R$ {item.price.toFixed(2).replace(".", ",")}</p>
                        </div>
                        <div className="flex justify-between items-end mt-4">
                          <div className="flex items-center border rounded-md">
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                          <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700">
                            <Trash2 className="h-4 w-4 mr-1" />
                            Remover
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 border rounded-lg">
                  <p className="text-gray-500 mb-4">Seu carrinho está vazio</p>
                  <Link href="/">
                    <Button>Continuar Comprando</Button>
                  </Link>
                </div>
              )}
            </div>

            <div>
              <div className="border rounded-lg p-4">
                <h2 className="font-bold text-lg mb-4">Resumo do Pedido</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>R$ {subtotal.toFixed(2).replace(".", ",")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Frete</span>
                    <span>R$ {shipping.toFixed(2).replace(".", ",")}</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>R$ {total.toFixed(2).replace(".", ",")}</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-pink-500 hover:bg-pink-600">Finalizar Compra</Button>
                <p className="text-xs text-center text-gray-500 mt-4">
                  Ao finalizar sua compra, você concorda com nossos Termos de Serviço e Política de Privacidade
                </p>
              </div>

              <div className="mt-6 border rounded-lg p-4">
                <h3 className="font-medium mb-2">Métodos de Pagamento</h3>
                <div className="flex flex-wrap gap-2">
                  <div className="border rounded p-2 w-14 h-10 flex items-center justify-center bg-gray-50">
                    <span className="text-xs font-bold">VISA</span>
                  </div>
                  <div className="border rounded p-2 w-14 h-10 flex items-center justify-center bg-gray-50">
                    <span className="text-xs font-bold">MASTER</span>
                  </div>
                  <div className="border rounded p-2 w-14 h-10 flex items-center justify-center bg-gray-50">
                    <span className="text-xs font-bold">PIX</span>
                  </div>
                  <div className="border rounded p-2 w-14 h-10 flex items-center justify-center bg-gray-50">
                    <span className="text-xs font-bold">BOLETO</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-100 py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          © 2024 Marketplace. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  )
}

