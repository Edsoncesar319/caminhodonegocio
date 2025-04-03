import { Search, ShoppingCart, Bell, Heart, ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="relative w-14 h-10">
                <svg viewBox="0 0 60 40" className="w-full h-full">
                  <path d="M20 10 A10 10 0 1 0 20 30 A10 10 0 1 0 20 10 Z" fill="#00A3D7" />
                  <path d="M40 10 A10 10 0 1 0 40 30 A10 10 0 1 0 40 10 Z" fill="#E6316F" />
                  <path d="M30 10 A10 10 0 1 0 30 30 A10 10 0 1 0 30 10 Z" fill="#9E2F92" opacity="0.5" />
                </svg>
              </div>
            </Link>

            {/* Search */}
            <div className="relative flex-1 max-w-xl mx-4">
              <Input
                type="text"
                placeholder="Serviços, Eletrônicos, Eletrodomésticos, Celulares, Roupas..."
                className="w-full rounded-md bg-gray-100 pl-4 pr-10"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <Button variant="link" className="font-semibold">
                LOGIN
              </Button>
              <Button className="bg-pink-500 hover:bg-pink-600 text-white rounded-full">ANUNCIAR</Button>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center mt-2 text-sm text-gray-700">
            <div className="flex items-center">
              <svg className="h-5 w-5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="font-semibold">62800-000, Endereço</span>
              <span className="ml-1">Cidade, Estado</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1 font-medium">
                Categorias
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <Link href="/minhas-compras" className="font-medium">
                Minhas Compras
              </Link>
              <Link href="/meus-anuncios" className="font-medium">
                Meus Anúncios
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" className="flex items-center gap-1">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                Chat
              </Button>
              <Button variant="ghost" className="flex items-center gap-1">
                <ShoppingCart className="h-5 w-5" />
                Carrinho
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Filters */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" className="rounded-full border-gray-300 bg-white flex items-center gap-1">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
              Todos os filtros
            </Button>
            <Button variant="outline" className="rounded-full bg-pink-500 text-white border-pink-500">
              Preço
            </Button>
            <Button variant="outline" className="rounded-full bg-pink-500 text-white border-pink-500">
              Cidade/Estado
            </Button>
            <Button variant="outline" className="rounded-full border-gray-300 bg-white">
              Hardware
            </Button>
            <Button variant="outline" className="rounded-full border-gray-300 bg-white">
              Eletrodomésticos
            </Button>
            <Button variant="outline" className="rounded-full border-gray-300 bg-white">
              Veículos
            </Button>
            <Button
              variant="outline"
              className="rounded-full bg-pink-500 text-white border-pink-500 flex items-center gap-1"
            >
              <Heart className="h-4 w-4 fill-white" />
              Avise-me
            </Button>
          </div>

          <div className="flex justify-end mt-4">
            <Button variant="outline" className="rounded-full border-gray-300 bg-white flex items-center gap-1">
              Mais Relevantes
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </Button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="container mx-auto px-4 py-6">
          <div className="relative">
            <h2 className="text-lg font-semibold mb-4">Produtos em Destaque</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { id: 1, name: "Produto Purple", price: "R$ 1.750", color: "bg-purple-700", rating: 5 },
                { id: 2, name: "Produto Roxo", price: "R$ 3.450", color: "bg-purple-800", rating: 4 },
                { id: 3, name: "Produto Azul", price: "R$ 1.750", color: "bg-blue-700", rating: 5 },
                { id: 4, name: "Produto Turquesa", price: "R$ 2.100", color: "bg-cyan-500", rating: 4 },
              ].map((product) => (
                <div key={product.id} className="relative group">
                  <div className={`${product.color} rounded-lg aspect-square relative`}>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 text-white hover:bg-white/20 z-10"
                    >
                      <Heart className="h-5 w-5 fill-white" />
                    </Button>
                    <div className="absolute bottom-2 left-2 bg-white/90 text-xs font-bold px-1 rounded">
                      {product.id}
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="flex">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${i < product.rating ? "fill-orange-500 text-orange-500" : "fill-gray-300 text-gray-300"}`}
                          />
                        ))}
                    </div>
                    <h3 className="font-medium text-sm mt-1">{product.name}</h3>
                    <p className="font-bold">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full z-10"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full z-10"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="relative mt-12">
            <h2 className="text-lg font-semibold mb-4">Seus Interesses</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { id: 1, name: "Produto Purple", price: "R$ 1.750", color: "bg-purple-700", rating: 5 },
                { id: 2, name: "Produto Roxo", price: "R$ 3.450", color: "bg-purple-800", rating: 4 },
                { id: 3, name: "Produto Azul", price: "R$ 1.750", color: "bg-blue-700", rating: 5 },
                { id: 4, name: "Produto Turquesa", price: "R$ 2.100", color: "bg-cyan-500", rating: 4 },
              ].map((product) => (
                <div key={product.id} className="relative group">
                  <div className={`${product.color} rounded-lg aspect-square relative`}>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 text-white hover:bg-white/20 z-10"
                    >
                      <Heart className="h-5 w-5 fill-white" />
                    </Button>
                    <div className="absolute bottom-2 left-2 bg-white/90 text-xs font-bold px-1 rounded">
                      {product.id}
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="flex">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${i < product.rating ? "fill-orange-500 text-orange-500" : "fill-gray-300 text-gray-300"}`}
                          />
                        ))}
                    </div>
                    <h3 className="font-medium text-sm mt-1">{product.name}</h3>
                    <p className="font-bold">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full z-10"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full z-10"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-purple-900 text-white py-8 mt-8">
          <div className="container mx-auto px-4">
            <h2 className="text-xl font-semibold mb-4">Quem nós somos?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm leading-relaxed">
                  Seja bem-vindo(a) ao Caminho de Negócios, o seu espaço preferido para encontrar ofertas incríveis e
                  conectar pessoas que desejam comprar, vender ou contratar serviços de forma rápida e eficiente.
                </p>
                <div className="flex gap-2 mt-4">
                  <Button variant="outline" className="text-white border-white hover:bg-white/10">
                    Entender
                  </Button>
                  <Button className="bg-white text-purple-900 hover:bg-white/90">Saiba mais</Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-purple-800 p-4 rounded-lg flex flex-col items-center justify-center">
                  <svg className="h-10 w-10 mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="text-sm">Comunidade</span>
                </div>
                <div className="bg-purple-800 p-4 rounded-lg flex flex-col items-center justify-center">
                  <svg className="h-10 w-10 mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                    />
                  </svg>
                  <span className="text-sm">Negociações</span>
                </div>
                <div className="bg-purple-800 p-4 rounded-lg flex flex-col items-center justify-center">
                  <svg className="h-10 w-10 mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                  <span className="text-sm">Ideias</span>
                </div>
                <div className="bg-purple-800 p-4 rounded-lg flex flex-col items-center justify-center">
                  <svg className="h-10 w-10 mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                    />
                  </svg>
                  <span className="text-sm">Entregas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Categorias</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:underline">
                    Eletrônicos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Eletrodomésticos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Celulares
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Roupas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Veículos
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Ajuda</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:underline">
                    Central de Ajuda
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Contato
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Termos de Uso
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Política de Privacidade
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Sobre Nós</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:underline">
                    Quem Somos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Trabalhe Conosco
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Imprensa
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-pink-500">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </svg>
                </Link>
                <Link href="#" className="hover:text-pink-500">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </Link>
                <Link href="#" className="hover:text-pink-500">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </Link>
                <Link href="#" className="hover:text-pink-500">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-6 text-sm text-center text-gray-500">
            © 2025 caminho do negócio by starke Brasil Desenvolvimento. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}

