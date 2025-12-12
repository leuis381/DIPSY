import React, { useState } from 'react';

export default function App() {
  const [currentSide, setCurrentSide] = useState<'front' | 'back'>('front');

  return (
    <div className="min-h-screen bg-gray-300 py-4 px-4">
      <div className="max-w-[210mm] mx-auto">
        {/* Toggle buttons */}
        <div className="flex gap-4 mb-4 justify-center no-print">
          <button
            onClick={() => setCurrentSide('front')}
            className={`px-8 py-3 rounded font-bold transition-all ${
              currentSide === 'front' 
                ? 'bg-[#e8502c] text-white' 
                : 'bg-white text-gray-700'
            }`}
          >
            LADO A - PROMOCIONES
          </button>
          <button
            onClick={() => setCurrentSide('back')}
            className={`px-8 py-3 rounded font-bold transition-all ${
              currentSide === 'back' 
                ? 'bg-[#e8502c] text-white' 
                : 'bg-white text-gray-700'
            }`}
          >
            LADO B - MENÚ COMPLETO
          </button>
        </div>

        {/* Menu card - Exact A4 size */}
        <div className="bg-white shadow-2xl print-page" style={{ width: '210mm', height: '297mm' }}>
          {currentSide === 'front' ? <FrontSide /> : <BackSide />}
        </div>
      </div>
    </div>
  );
}

function FrontSide() {
  return (
    <div className="h-full flex flex-col" style={{ padding: '15mm' }}>
      {/* Logo Header */}
      <div className="text-center pb-3 border-b-4 border-[#e8502c]" style={{ marginBottom: '10mm' }}>
        <div className="logo-text text-[#e8502c]" style={{ fontSize: '52pt', lineHeight: '1', letterSpacing: '6px', marginBottom: '2mm' }}>
          DYPSI
        </div>
        <div className="subtitle-text" style={{ fontSize: '9pt', letterSpacing: '3px' }}>
          FAST FOOD • DELIVERY
        </div>
      </div>

      {/* Promociones Title */}
      <div className="text-center" style={{ marginBottom: '8mm' }}>
        <div className="inline-block bg-[#e8502c] text-white px-10 py-2">
          <h2 className="promo-title" style={{ fontSize: '22pt', letterSpacing: '2px' }}>
            PROMOCIONES
          </h2>
        </div>
      </div>

      {/* Promo Personal */}
      <div className="border-3 border-[#e8502c] p-3 bg-[#fff5f0]" style={{ marginBottom: '6mm' }}>
        <div className="flex justify-between items-start" style={{ marginBottom: '4mm' }}>
          <div className="promo-name" style={{ fontSize: '18pt', color: '#e8502c' }}>
            PROMO PERSONAL
          </div>
          <div className="bg-[#e8502c] text-white px-4 py-1">
            <span className="price-text" style={{ fontSize: '26pt' }}>S/10.00</span>
          </div>
        </div>
        <div className="body-text pl-3" style={{ fontSize: '11pt', lineHeight: '1.5' }}>
          <div className="flex items-start mb-1">
            <span className="mr-2">•</span>
            <span>1 Pizza personal 4 tajadas (cualquier sabor clásico)</span>
          </div>
          <div className="flex items-start">
            <span className="mr-2">•</span>
            <span>1 Pepsi 355ml</span>
          </div>
        </div>
      </div>

      {/* Promo Mediana */}
      <div className="border-3 border-[#e8502c] p-3 bg-[#fff5f0]" style={{ marginBottom: '6mm' }}>
        <div className="flex justify-between items-start" style={{ marginBottom: '4mm' }}>
          <div className="promo-name" style={{ fontSize: '18pt', color: '#e8502c' }}>
            PROMO MEDIANA
          </div>
          <div className="bg-[#e8502c] text-white px-4 py-1">
            <span className="price-text" style={{ fontSize: '26pt' }}>S/22.90</span>
          </div>
        </div>
        <div className="body-text pl-3" style={{ fontSize: '11pt', lineHeight: '1.5' }}>
          <div className="flex items-start mb-1">
            <span className="mr-2">•</span>
            <span>1 Pizza mediana 8 tajadas (cualquier sabor clásico)</span>
          </div>
          <div className="flex items-start mb-1">
            <span className="mr-2">•</span>
            <span>1 Pan al ajo</span>
          </div>
          <div className="flex items-start">
            <span className="mr-2">•</span>
            <span>1 Pepsi 1 litro</span>
          </div>
        </div>
      </div>

      {/* Promo Familiar */}
      <div className="border-3 border-[#e8502c] p-3 bg-[#fff5f0]" style={{ marginBottom: '6mm' }}>
        <div style={{ marginBottom: '4mm' }}>
          <div className="promo-name" style={{ fontSize: '18pt', color: '#e8502c', marginBottom: '3mm' }}>
            PROMO FAMILIAR
          </div>
          <div className="body-text pl-3" style={{ fontSize: '11pt', lineHeight: '1.5' }}>
            <div className="flex items-start mb-1">
              <span className="mr-2">•</span>
              <span>1 Pizza familiar 12 tajadas</span>
            </div>
            <div className="flex items-start mb-1">
              <span className="mr-2">•</span>
              <span>1 Pan al ajo</span>
            </div>
            <div className="flex items-start">
              <span className="mr-2">•</span>
              <span>1 Pepsi 1.5 litros</span>
            </div>
          </div>
        </div>
        <div className="flex justify-around pt-2 border-t-2 border-[#e8502c]">
          <div className="text-center">
            <div className="body-text mb-1" style={{ fontSize: '9pt' }}>Sabores Clásicos</div>
            <div className="bg-[#e8502c] text-white px-4 py-1">
              <span className="price-text" style={{ fontSize: '21pt' }}>S/30.90</span>
            </div>
          </div>
          <div className="text-center">
            <div className="body-text mb-1" style={{ fontSize: '9pt' }}>Sabores Premium</div>
            <div className="bg-[#e8502c] text-white px-4 py-1">
              <span className="price-text" style={{ fontSize: '21pt' }}>S/48.00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sabores compacto */}
      <div className="bg-black text-white p-3" style={{ marginBottom: '6mm' }}>
        <div className="section-title" style={{ fontSize: '13pt', letterSpacing: '1px', marginBottom: '3mm' }}>
          SABORES DE PIZZA
        </div>
        <div className="grid grid-cols-3 gap-x-3 gap-y-1 body-text" style={{ fontSize: '9.5pt' }}>
          <div>• Mozzarella</div>
          <div>• Americana</div>
          <div>• Pepperoni</div>
          <div>• Hawaiana</div>
          <div>• Ratatouille</div>
          <div>• Suprema</div>
          <div>• Cordon Blue</div>
          <div>• Vegetariana</div>
          <div>• Boloñesa</div>
        </div>
      </div>

      {/* Otros Combos DETALLADOS */}
      <div style={{ marginBottom: '6mm' }}>
        <div className="section-title text-center bg-gray-800 text-white py-2" style={{ fontSize: '15pt', letterSpacing: '2px', marginBottom: '5mm' }}>
          OTROS COMBOS
        </div>
        
        {/* Combo Burger */}
        <div className="border-2 border-gray-400 p-2 bg-gray-50" style={{ marginBottom: '4mm' }}>
          <div className="combo-name" style={{ fontSize: '13pt', marginBottom: '2mm' }}>🍔 COMBO BURGER</div>
          <div className="body-text" style={{ fontSize: '8.5pt', lineHeight: '1.4', marginBottom: '3mm' }}>
            <strong>Incluye:</strong> Hamburguesa + Papas fritas + Gaseosa 500ml
          </div>
          <div className="grid grid-cols-3 gap-2 body-text" style={{ fontSize: '8.5pt' }}>
            <div className="bg-white p-1 text-center border border-gray-300">
              <div>Burger Clásica</div>
              <div className="font-bold text-[#e8502c]">S/10.00</div>
            </div>
            <div className="bg-white p-1 text-center border border-gray-300">
              <div>Cheese Burger</div>
              <div className="font-bold text-[#e8502c]">S/12.00</div>
            </div>
            <div className="bg-white p-1 text-center border border-gray-300">
              <div>Burger Premium</div>
              <div className="font-bold text-[#e8502c]">S/15.00</div>
            </div>
          </div>
        </div>

        {/* Combo Alitas */}
        <div className="border-2 border-gray-400 p-2 bg-gray-50" style={{ marginBottom: '4mm' }}>
          <div className="combo-name" style={{ fontSize: '13pt', marginBottom: '2mm' }}>🍗 COMBO ALITAS</div>
          <div className="body-text" style={{ fontSize: '8.5pt', lineHeight: '1.4', marginBottom: '3mm' }}>
            <strong>Incluye:</strong> Alitas (BBQ/Búfalo/Maracuyá) + Papas fritas + Gaseosa 500ml
          </div>
          <div className="grid grid-cols-2 gap-2 body-text" style={{ fontSize: '8.5pt' }}>
            <div className="bg-white p-1 text-center border border-gray-300">
              <div>6 Alitas</div>
              <div className="font-bold text-[#e8502c]">S/15.00</div>
            </div>
            <div className="bg-white p-1 text-center border border-gray-300">
              <div>12 Alitas</div>
              <div className="font-bold text-[#e8502c]">S/18.00</div>
            </div>
          </div>
        </div>

        {/* Combo Crispy */}
        <div className="border-2 border-gray-400 p-2 bg-gray-50" style={{ marginBottom: '4mm' }}>
          <div className="combo-name" style={{ fontSize: '13pt', marginBottom: '2mm' }}>🍖 COMBO CRISPY</div>
          <div className="body-text" style={{ fontSize: '8.5pt', lineHeight: '1.4', marginBottom: '3mm' }}>
            <strong>Incluye:</strong> Crispy de pollo + Papas fritas + Gaseosa 500ml
          </div>
          <div className="grid grid-cols-2 gap-2 body-text" style={{ fontSize: '8.5pt' }}>
            <div className="bg-white p-1 text-center border border-gray-300">
              <div>Porción Regular</div>
              <div className="font-bold text-[#e8502c]">S/12.00</div>
            </div>
            <div className="bg-white p-1 text-center border border-gray-300">
              <div>Porción Grande</div>
              <div className="font-bold text-[#e8502c]">S/16.00</div>
            </div>
          </div>
        </div>

        {/* Combo Gaseosa */}
        <div className="border-2 border-gray-400 p-2 bg-gray-50">
          <div className="combo-name" style={{ fontSize: '13pt', marginBottom: '2mm' }}>🥤 COMBO GASEOSA</div>
          <div className="body-text" style={{ fontSize: '8.5pt', lineHeight: '1.4', marginBottom: '3mm' }}>
            <strong>Incluye:</strong> Cualquier plato del menú + Gaseosa 1 litro (Inca Kola, Coca Cola o Pepsi)
          </div>
          <div className="grid grid-cols-2 gap-2 body-text" style={{ fontSize: '8.5pt' }}>
            <div className="bg-white p-1 text-center border border-gray-300">
              <div>Plato S/10-12</div>
              <div className="font-bold text-[#e8502c]">+ S/4.00</div>
            </div>
            <div className="bg-white p-1 text-center border border-gray-300">
              <div>Plato S/13-18</div>
              <div className="font-bold text-[#e8502c]">+ S/3.50</div>
            </div>
          </div>
        </div>
      </div>

      {/* Delivery */}
      <div className="mt-auto bg-black text-white p-3 text-center">
        <div className="delivery-text" style={{ fontSize: '14pt', letterSpacing: '2px', marginBottom: '2mm' }}>
          PEDIDOS A DOMICILIO
        </div>
        <div className="phone-number" style={{ fontSize: '32pt', letterSpacing: '3px' }}>
          906 538 844
        </div>
      </div>
    </div>
  );
}

function BackSide() {
  return (
    <div className="h-full p-8 overflow-y-auto">
      {/* Header */}
      <div className="text-center mb-5 pb-3 border-b-4 border-[#e8502c]">
        <div className="logo-text text-[#e8502c]" style={{ fontSize: '42px', letterSpacing: '5px' }}>
          MENÚ COMPLETO
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5">
        {/* Column 1 */}
        <div>
          {/* PIZZAS */}
          <div className="mb-5">
            <div className="bg-[#e8502c] text-white px-3 py-2 mb-2">
              <h3 className="section-title" style={{ fontSize: '18px', letterSpacing: '1px' }}>🍕 PIZZAS</h3>
            </div>
            <div className="bg-gray-100 p-2 mb-2">
              <div className="grid grid-cols-3 gap-2 text-center body-text" style={{ fontSize: '12px' }}>
                <div>
                  <div className="font-bold" style={{ fontSize: '15px', color: '#e8502c' }}>S/9.00</div>
                  <div className="text-gray-600" style={{ fontSize: '10px' }}>Personal (4 tajadas)</div>
                </div>
                <div>
                  <div className="font-bold" style={{ fontSize: '15px', color: '#e8502c' }}>S/20.90</div>
                  <div className="text-gray-600" style={{ fontSize: '10px' }}>Mediana (8 tajadas)</div>
                </div>
                <div>
                  <div className="font-bold" style={{ fontSize: '15px', color: '#e8502c' }}>S/27.90</div>
                  <div className="text-gray-600" style={{ fontSize: '10px' }}>Familiar (12 tajadas)</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-2 border border-gray-300 body-text" style={{ fontSize: '10px', lineHeight: '1.4' }}>
              <strong className="text-[#e8502c]">9 Sabores clásicos:</strong> Mozzarella • Americana • Pepperoni • Hawaiana • Ratatouille • Suprema • Cordon Blue • Vegetariana • Boloñesa
            </div>
          </div>

          {/* PASTAS */}
          <div className="mb-5">
            <div className="bg-[#e8502c] text-white px-3 py-2 mb-2">
              <h3 className="section-title" style={{ fontSize: '18px', letterSpacing: '1px' }}>🍝 PASTAS & LASAÑAS</h3>
            </div>
            <div className="space-y-0.5">
              <MenuItem2 name="Fetuccine Alfredo" detail="Salsa blanca cremosa" price="S/14.90" />
              <MenuItem2 name="Fetuccine Boloñesa" detail="Salsa de carne" price="S/15.90" />
              <MenuItem2 name="Fetuccine Stroganoff" detail="Salsa de champiñones" price="S/16.90" />
              <MenuItem2 name="Lasaña mixta" detail="Carne y pollo" price="S/16.90" />
              <MenuItem2 name="Lasaña de pollo" detail="Pollo deshilachado" price="S/15.90" />
            </div>
            <div className="mt-2 bg-yellow-100 border border-yellow-400 p-2 body-text" style={{ fontSize: '10px' }}>
              <strong>Combos:</strong> Cualquier pasta/lasaña + Pan al ajo = S/18.90 - S/31.90
            </div>
          </div>

          {/* ALITAS */}
          <div className="mb-5">
            <div className="bg-[#e8502c] text-white px-3 py-2 mb-2">
              <h3 className="section-title" style={{ fontSize: '18px', letterSpacing: '1px' }}>🍗 ALITAS & CRISPY</h3>
            </div>
            <div className="mb-2 bg-gray-100 p-2 body-text" style={{ fontSize: '10px' }}>
              <strong>Salsas disponibles:</strong> BBQ • Búfalo • Maracuyá
            </div>
            <div className="space-y-0.5">
              <MenuItem2 name="Alitas (6 unidades)" detail="Cualquier salsa" price="S/11.00" />
              <MenuItem2 name="Alitas (12 unidades)" detail="Cualquier salsa" price="S/20.00" bold />
              <MenuItem2 name="Crispy de pollo" detail="Trozos crocantes" price="S/15.00 - S/28.00" />
              <MenuItem2 name="Chicharrón de pollo" detail="Porción generosa" price="S/25.00" />
            </div>
            <div className="mt-2 bg-yellow-100 border border-yellow-400 p-2 body-text" style={{ fontSize: '10px' }}>
              <strong>Combos con papas nativas:</strong> Alitas o Crispy + Papas nativas + Salsas = S/32.00 - S/65.00 (según cantidad)
            </div>
          </div>

          {/* TEQUEÑOS */}
          <div className="mb-5">
            <div className="bg-[#e8502c] text-white px-3 py-2 mb-2">
              <h3 className="section-title" style={{ fontSize: '18px', letterSpacing: '1px' }}>🧄 TEQUEÑOS & PAN AL AJO</h3>
            </div>
            <div className="space-y-0.5">
              <MenuItem2 name="Tequeños de mozzarella" detail="6 unidades" price="S/9.00" />
              <MenuItem2 name="Tequeños de pepperoni" detail="6 unidades" price="S/10.00" />
              <MenuItem2 name="Tequeños de jamón" detail="6 unidades" price="S/10.00" />
              <MenuItem2 name="Tequeños (12 unidades)" detail="Mozzarella/Pepperoni/Jamón" price="S/17.00 - S/19.00" bold />
              <MenuItem2 name="Pan al ajo con queso" detail="Mozzarella gratinado" price="S/8.00" />
              <MenuItem2 name="Pan al ajo con jamón" detail="Jamón y queso" price="S/9.00" />
              <MenuItem2 name="Pan al ajo con chorizo" detail="O con salchicha" price="S/10.00" />
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          {/* HAMBURGUESAS */}
          <div className="mb-5">
            <div className="bg-[#e8502c] text-white px-3 py-2 mb-2">
              <h3 className="section-title" style={{ fontSize: '18px', letterSpacing: '1px' }}>🍔 HAMBURGUESAS</h3>
            </div>
            <div className="mb-2 bg-gray-100 p-2 body-text" style={{ fontSize: '10px' }}>
              <strong>Todas incluyen:</strong> Pan artesanal, lechuga, tomate, cebolla, salsas
            </div>
            <div className="space-y-0.5">
              <MenuItem2 name="Burger clásica" detail="Carne 120g + queso americano" price="S/10.00" />
              <MenuItem2 name="Cheese burger" detail="Carne 150g + queso cheddar" price="S/12.00" />
              <MenuItem2 name="Burger premium" detail="Carne 180g + tocino + huevo" price="S/14.00" />
              <MenuItem2 name="Doble carne" detail="2 carnes 120g + doble queso" price="S/16.00" bold />
              <MenuItem2 name="Burger al plato" detail="Con arroz y papas" price="S/15.00" />
              <MenuItem2 name="Crispy burger" detail="Pollo crispy + salsas especiales" price="S/13.00" />
              <MenuItem2 name="Choripanes" detail="Chorizo parrillero + salsas" price="S/12.00 - S/18.00" />
            </div>
          </div>

          {/* SALCHIPAPAS */}
          <div className="mb-5">
            <div className="bg-[#e8502c] text-white px-3 py-2 mb-2">
              <h3 className="section-title" style={{ fontSize: '18px', letterSpacing: '1px' }}>🌭 SALCHIPAPAS</h3>
            </div>
            <div className="mb-2 bg-gray-100 p-2 body-text" style={{ fontSize: '10px' }}>
              <strong>Todas incluyen:</strong> Papas fritas, salsas (ketchup, mayonesa, mostaza)
            </div>
            <div className="space-y-0.5">
              <MenuItem2 name="Salchipapa clásica" detail="Salchicha hot dog + papas" price="S/10.00" />
              <MenuItem2 name="Salchimix" detail="Hot dog + chorizo + papas" price="S/12.00" />
              <MenuItem2 name="Salchipapa cheese" detail="Con queso cheddar fundido" price="S/13.00" />
              <MenuItem2 name="Salchipapa a lo pobre" detail="+ Huevo frito + plátano frito" price="S/15.00" bold />
              <MenuItem2 name="Salchipapa broaster" detail="Con pollo broaster" price="S/16.00" bold />
            </div>
          </div>

          {/* BEBIDAS */}
          <div className="mb-5">
            <div className="bg-[#e8502c] text-white px-3 py-2 mb-2">
              <h3 className="section-title" style={{ fontSize: '18px', letterSpacing: '1px' }}>🥤 BEBIDAS</h3>
            </div>
            <div className="space-y-0.5">
              <MenuItem2 name="Jugos naturales" detail="Naranja, papaya, piña, maracuyá" price="S/7.50" />
              <MenuItem2 name="Jugos con leche" detail="Fresa, lúcuma, plátano" price="S/11.00" />
              <MenuItem2 name="Refrescos caseros" detail="Chicha morada, limonada, maracuyá" price="S/4.50" />
            </div>
            <div className="mt-2 mb-2 bg-gray-100 p-2">
              <div className="body-text mb-1" style={{ fontSize: '11px' }}>
                <strong className="text-[#e8502c]">GASEOSAS:</strong> Inca Kola, Coca Cola, Pepsi
              </div>
              <div className="grid grid-cols-2 gap-1 body-text" style={{ fontSize: '10px' }}>
                <div className="flex justify-between">
                  <span>• 355ml (personal)</span>
                  <span className="font-bold text-[#e8502c]">S/3.00</span>
                </div>
                <div className="flex justify-between">
                  <span>• 500ml</span>
                  <span className="font-bold text-[#e8502c]">S/4.00</span>
                </div>
                <div className="flex justify-between">
                  <span>• 1 litro</span>
                  <span className="font-bold text-[#e8502c]">S/6.00</span>
                </div>
                <div className="flex justify-between">
                  <span>• 1.5 litros</span>
                  <span className="font-bold text-[#e8502c]">S/8.00</span>
                </div>
              </div>
            </div>
            <div className="space-y-0.5">
              <MenuItem2 name="Café americano" detail="Café pasado" price="S/3.00" />
              <MenuItem2 name="Café con leche" detail="Café + leche evaporada" price="S/4.00" />
              <MenuItem2 name="Infusiones" detail="Manzanilla, anís, hierba luisa" price="S/3.00" />
            </div>
          </div>

          {/* EXTRAS */}
          <div className="mb-5">
            <div className="bg-black text-white px-3 py-2 mb-2">
              <h3 className="section-title" style={{ fontSize: '18px', letterSpacing: '1px' }}>➕ EXTRAS</h3>
            </div>
            <div className="space-y-0.5">
              <MenuItem2 name="Carne adicional" detail="120g de carne molida" price="S/5.00" />
              <MenuItem2 name="Huevo adicional" detail="Huevo frito" price="S/2.00" />
              <MenuItem2 name="Mozzarella extra" detail="Porción de queso" price="S/3.00" />
              <MenuItem2 name="Tocino" detail="Tiras de tocino" price="S/3.00" />
              <MenuItem2 name="Palta" detail="Porción de palta" price="S/2.50" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 bg-black text-white p-3 text-center">
        <div className="delivery-text" style={{ fontSize: '16px', letterSpacing: '2px' }}>
          📱 DELIVERY: <span className="phone-number" style={{ fontSize: '24px', letterSpacing: '2px' }}>906 538 844</span>
        </div>
      </div>
    </div>
  );
}

interface MenuItem2Props {
  name: string;
  detail: string;
  price: string;
  bold?: boolean;
}

function MenuItem2({ name, detail, price, bold }: MenuItem2Props) {
  return (
    <div className={`flex justify-between items-start py-0.5 px-1.5 ${bold ? 'bg-yellow-100 border-l-3 border-[#e8502c]' : 'bg-white border-b border-gray-200'}`}>
      <div className="flex-1 pr-2">
        <div className="body-text" style={{ fontSize: '9pt', lineHeight: '1.2' }}>
          <strong>{name}</strong>
        </div>
        <div className="text-gray-600" style={{ fontSize: '7pt', lineHeight: '1.2' }}>{detail}</div>
      </div>
      <span className="price-small whitespace-nowrap" style={{ fontSize: '9pt', color: '#e8502c', fontWeight: bold ? 'bold' : '600' }}>{price}</span>
    </div>
  );
}