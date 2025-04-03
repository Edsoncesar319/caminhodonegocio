import Link from "next/link"
import { ChevronLeft, Heart, ShoppingCart, Star, Share2, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProductPage({ params }: { params: { id: string } }) {
  // This would normally come from a database
  const product = {
    id: params.id,
    name: "Produto Purple Premium",
    price: "R$ 1.750",
    color: "bg-purple-700",
    rating: 5,
    seller: "Loja Oficial",
    location: "São Paulo, SP",
    description:
      "Produto de alta qualidade com design moderno e funcionalidades avançadas. Perfeito para uso diário com garantia de 12 meses do fabricante.",
    specifications: [
      { name: "Marca", value: "Premium Brand" },
      { name: "Modelo", value: "XP-2024" },
      { name: "Cor", value: "Roxo" },
      { name: "Dimensões", value: "30 x 20 x 10 cm" },
      { name: "Peso", value: "500g" },
      { name: "Garantia", value: "12 meses" },
    ],
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container mx-auto px-4 py-3">
          <Link href="/" className="inline-flex items-center text-sm font-medium">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Voltar para a página inicial
          </Link>
        </div>
      </header>

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Product Images */}
            <div className="space-y-4">
              <div className={`${product.color} rounded-lg aspect-square relative`}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 text-white hover:bg-white/20 z-10"
                >
                  <Heart className="h-6 w-6" />
                </Button>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className={`${product.color} rounded-lg aspect-square cursor-pointer ${i === 1 ? "ring-2 ring-pink-500" : ""}`}
                  />
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold">{product.name}</h1>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < product.rating ? "fill-orange-500 text-orange-500" : "fill-gray-300 text-gray-300"}`}
                        />
                      ))}
                  </div>
                  <span className="text-sm text-gray-500">(127 avaliações)</span>
                </div>
              </div>

              <div className="text-3xl font-bold">{product.price}</div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Vendido por:</span>
                  <span className="text-sm text-blue-600">{product.seller}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Localização:</span>
                  <span className="text-sm">{product.location}</span>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">Opções de entrega:</h3>
                <div className="flex items-center gap-2 p-3 border rounded-lg">
                  <svg
                    className="h-6 w-6 text-green-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-medium">Entrega Rápida</p>
                    <p className="text-sm text-gray-500">Receba em até 2 dias úteis</p>
                  </div>
                  <span className="ml-auto font-medium">R$ 15,90</span>
                </div>
                <div className="flex items-center gap-2 p-3 border rounded-lg">
                  <svg
                    className="h-6 w-6 text-green-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-medium">Retirada na Loja</p>
                    <p className="text-sm text-gray-500">Disponível em 1 dia útil</p>
                  </div>
                  <span className="ml-auto font-medium">Grátis</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="bg-pink-500 hover:bg-pink-600 text-white flex-1">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Adicionar ao Carrinho
                </Button>
                <Button variant="outline" className="flex-1">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Conversar com Vendedor
                </Button>
                <Button variant="ghost" size="icon">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Tabs defaultValue="description">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">Descrição</TabsTrigger>
                <TabsTrigger value="specifications">Especificações</TabsTrigger>
                <TabsTrigger value="reviews">Avaliações</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="p-4 border rounded-lg mt-4">
                <p>{product.description}</p>
              </TabsContent>
              <TabsContent value="specifications" className="p-4 border rounded-lg mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.specifications.map((spec, index) => (
                    <div key={index} className="flex justify-between py-2 border-b">
                      <span className="font-medium">{spec.name}</span>
                      <span>{spec.value}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="reviews" className="p-4 border rounded-lg mt-4">
                <div className="space-y-4">
                  <div className="flex items-start gap-4 pb-4 border-b">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="font-medium">JD</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">João D.</span>
                        <div className="flex">
                          {Array(5)
                            .fill(0)
                            .map((_, i) => (
                              <Star key={i} className="h-3 w-3 fill-orange-500 text-orange-500" />
                            ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-500">Há 2 semanas</p>
                      <p className="mt-2">Produto excelente! Chegou antes do prazo e a qualidade é incrível.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 pb-4 border-b">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="font-medium">MS</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Maria S.</span>
                        <div className="flex">
                          {Array(5)
                            .fill(0)
                            .map((_, i) => (
                              <Star
                                key={i}
                                className={`h-3 w-3 ${i < 4 ? "fill-orange-500 text-orange-500" : "fill-gray-300 text-gray-300"}`}
                              />
                            ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-500">Há 1 mês</p>
                      <p className="mt-2">Bom produto, mas a entrega demorou um pouco mais do que o esperado.</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Related Products */}
          <div className="mt-16">
            <h2 className="text-xl font-bold mb-6">Produtos Relacionados</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { id: 1, name: "Produto Purple", price: "R$ 1.750", color: "bg-purple-700", rating: 5 },
                { id: 2, name: "Produto Roxo", price: "R$ 3.450", color: "bg-purple-800", rating: 4 },
                { id: 3, name: "Produto Azul", price: "R$ 1.750", color: "bg-blue-700", rating: 5 },
                { id: 4, name: "Produto Turquesa", price: "R$ 2.100", color: "bg-cyan-500", rating: 4 },
              ].map((relatedProduct) => (
                <div key={relatedProduct.id} className="relative group">
                  <div className={`${relatedProduct.color} rounded-lg aspect-square relative`}>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 text-white hover:bg-white/20 z-10"
                    >
                      <Heart className="h-5 w-5 fill-white" />
                    </Button>
                  </div>
                  <div className="mt-2">
                    <div className="flex">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${i < relatedProduct.rating ? "fill-orange-500 text-orange-500" : "fill-gray-300 text-gray-300"}`}
                          />
                        ))}
                    </div>
                    <h3 className="font-medium text-sm mt-1">{relatedProduct.name}</h3>
                    <p className="font-bold">{relatedProduct.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-100 py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
        © 2025 caminho do negócio by starke Brasil Desenvolvimento. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  )
}

