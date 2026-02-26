    const ROUTES = [
      {
        id: "incubatorio-leituristas",
        title: "Incubatório – Leituristas",
        badge: "D&A Transportes",
        meta: "Pontos por turno (Manhã / Tarde / Noite).",
        sections: [
          { name: "Manhã (Entrada 05h20) • Saída 04h50",
            stops: [
              { name: "Posto Gabriel", time: "04h50" },
              { name: "Posto 6 Rodas", time: "04h50" },
              { name: "Cozinhas Gava", time: "04h50" },
              { name: "Farmácia Vitória (ponto de ônibus)", time: "04h50" },
            ]
          },
          { name: "Tarde (Entrada 13h20) • Saída 12h50",
            stops: [
              { name: "Parque do Som", time: "12h50" },
              { name: "Casa do Artesanato (Praça Patoeste)", time: "12h50" },
              { name: "Posto Gabriel", time: "12h50" },
              { name: "Cozinhas Gava", time: "12h50" },
              { name: "Farmácia Vitória (ponto de ônibus)", time: "12h50" },
            ]
          },
          { name: "Noite (Entrada 21h20) • Saída 20h50",
            stops: [
              { name: "Posto Gabriel", time: "20h50" },
              { name: "Novo Horizonte", time: "20h50" },
              { name: "Cozinhas Gava", time: "20h50" },
              { name: "Farmácia Vitória (ponto de ônibus)", time: "20h50" },
            ]
          }
        ]
      },
      {
        id: "incubatorio-07-1520",
        title: "Incubatório – Turno 07h às 15h20",
        badge: "D&A Transportes",
        meta: "Início 07h • Saída 15h20 • pontos a partir de 05h40.",
        sections: [
          { name: "Pontos",
            note: "Endereços detalhados (quando fornecidos) ajudam a abrir no Maps com mais precisão.",
            stops: [
              { name: "Trevo Taisa", time: "05h40" },
              { name: "Liquigás (Entrada bairro Bela Vista)", time: "05h40", address: "Marginal BR 158, esquina com Rua Édimo Pastro" },
              { name: "Planalto Gás (Ultra Gás)", time: "05h40", address: "Rua Édimo Pastro, esquina com Rua das Andorinhas" },
              { name: "Unidade de Saúde Planalto", time: "05h40", address: "Rua São Francisco de Assis" },
              { name: "Parquinho (Entrada Bairro São João)", time: "05h40", address: "Rua São Francisco de Assis, esquina com Rua dos Cardeais" },
              { name: "Associação dos Idosos (ponto de ônibus)", time: "05h40", address: "Rua dos Cardeais" },
              { name: "Mercado Suzin (ponto de ônibus)", time: "05h40", address: "Rua das Siriemas" },
              { name: "SOS Bebidas (ponto de ônibus)", time: "05h40", address: "Rua das Siriemas" },
              { name: "Consultório Odontológico (entrada do bairro)", time: "05h40", address: "Rua das Siriemas" },
              { name: "Mercado Gabrieli", time: "05h50", address: "Marginal BR 158" },
              { name: "Mercado Manfroi (Menino Deus)", time: "05h55", address: "Rua Itacolomi" },
              { name: "Posto Gabriel (Av. Tupi, baixada)", time: "06h00" },
              { name: "Posto Novo Milênio (Cristo Rei)", time: "06h00", address: "Avenida Tupi" },
              { name: "Equipar (Cristo Rei)", time: "06h00", address: "Avenida Tupi" },
              { name: "Granisul (Pinheirinho)", time: "06h00", address: "Avenida Tupi" },
              { name: "Instituto Filadélfia", time: "06h05", address: "Rua Mal. Deodoro, Cristo Rei" },
              { name: "Rotatória Novo Horizonte (Rua Curitiba)", time: "06h10" },
              { name: "Mercado do Tite", time: "06h10" },
              { name: "Salão Scarlet", time: "06h10" },
              { name: "Rua das Violetas", time: "06h15" },
              { name: "Mafessoni", time: "06h15" },
              { name: "Rua Lupicínio Rodrigues", time: "06h15" },
              { name: "Mercado japonês", time: "06h15" },
              { name: "Bar do Nei", time: "06h15" },
              { name: "Servfest", time: "06h20" },
              { name: "Bananas Cobalchini", time: "06h20" },
              { name: "Farmácia Vitória", time: "06h20" },
              { name: "Osvaldo Cruz", time: "06h20" },
              { name: "Gralha Azul (em frente à escola)", time: "06h20" },
              { name: "Trevo da Patrola", time: "06h20" },
            ]
          }
        ]
      },
      {
        id: "granjas-linha-01",
        title: "Granjas – Linha 01",
        badge: "D&A Transportes",
        meta: "Início 07h30 • Saída 16h30 • inclui baldeação Rio Pinheiro.",
        sections: [
          { name: "Pontos",
            stops: [
              { name: "Praça Patoeste", time: "06h25" },
              { name: "Posto Gabriel (Esquina)", time: "06h30" },
              { name: "Cattani Motos (Esquina)", time: "06h35" },
              { name: "Posto de Saúde Industrial", time: "06h40" },
              { name: "Capela Santo Antônio", time: "06h40" },
              { name: "Panificadora Isabela", time: "06h40" },
              { name: "Capela São Vicente", time: "06h40" },
              { name: "Mercado Scariot", time: "06h40" },
              { name: "Pracinha do Cristo Rei", time: "06h40" },
              { name: "Novo Milênio", time: "06h45" },
              { name: "Cordeiro Veículos", time: "06h45" },
              { name: "Cozinhas Gava", time: "06h50" },
              { name: "Posto Delta", time: "06h50" },
              { name: "Farmácia Vitória (ponto de ônibus)", time: "06h55" },
              { name: "Mercado Osvaldo Cruz", time: "07h00" },
              { name: "Trevo da Patrola (ponto de ônibus)", time: "07h05" },
              { name: "Baldeação Rio Pinheiro", time: "07h25" },
              { name: "Núcleo (03, 04, 05, 06)", time: "07h40" },
            ]
          }
        ]
      },
      {
        id: "granjas-linha-02",
        title: "Granjas – Linha 02",
        badge: "D&A Transportes",
        meta: "Linha 02 • inclui baldeação Rio Pinheiro.",
        sections: [
          { name: "Pontos",
            stops: [
              { name: "Loja Guiber", time: "06h40", address: "Marginal BR 158" },
              { name: "Liquigás (Entrada bairro Bela Vista)", time: "06h40", address: "Marginal BR 158, esquina com Rua Édimo Pastro" },
              { name: "Ponto de Lotação (Édimo Pastro/Ângelo Merlin)", time: "06h40" },
              { name: "Ultragás (Édimo Pastro / Andorinhas)", time: "06h45" },
              { name: "Posto de Saúde Planalto", time: "06h45", address: "Rua São Francisco de Assis" },
              { name: "Clube de Idosos (ponto de ônibus)", time: "06h50", address: "Rua dos Cardeais" },
              { name: "Mercado Suzin", time: "06h50", address: "Rua das Siriemas" },
              { name: "Panificadora Delícias do Trigo", time: "06h50", address: "Rua das Siriemas" },
              { name: "Consultório Odontologia (entrada do bairro)", time: "06h50", address: "Rua das Siriemas" },
              { name: "Parquinho Vila Verde", time: "06h55", address: "Rua Ivaí" },
              { name: "Mercado Manuela", time: "06h55" },
              { name: "AABB (Associação do Banco do Brasil)", time: "06h55" },
              { name: "Esquina Rua Lupicínio Rodrigues com Ivaí", time: "06h55" },
              { name: "Ligeirinho Guincho", time: "06h55" },
              { name: "Avícola Pato Branco (Guarita)", time: "07h00" },
              { name: "Mingos Beer", time: "07h00" },
              { name: "Corpo de Bombeiros Alvorada", time: "07h00" },
              { name: "Mercado Baratão", time: "07h00" },
              { name: "Mercado Princesa Isabel", time: "07h00" },
              { name: "Esquina Rua Princesa Isabel com Rua das Flores", time: "07h00" },
              { name: "Trevo da Patrolinha", time: "07h00" },
              { name: "Baldeação Rio Pinheiro", time: "07h25" },
              { name: "Núcleo (11, 12, 13, 14 e 41)", time: "07h30" },
            ]
          }
        ]
      },
      {
        id: "mariopolis-van",
        title: "Mariópolis Van",
        badge: "Van",
        meta: "Saída 07h00 • inclui baldeação Rio Pinheiro.",
        sections: [
          { name: "Pontos",
            stops: [
              { name: "Rodoviária (Mariópolis)", time: "07h00" },
              { name: "Granobom", time: "07h00" },
              { name: "Moinho Dona Hilda", time: "07h00" },
              { name: "Núcleo 18", time: "07h20" },
              { name: "Núcleo 19", time: "07h20" },
              { name: "Baldeação Rio Pinheiro", time: "07h25" },
              { name: "Núcleo (20, 21, 22)", time: "07h40" },
            ]
          }
        ]
      },
      {
        id: "munaretto-van",
        title: "Munaretto Van",
        badge: "Van",
        meta: "Saídas a partir de 07h25.",
        sections: [
          { name: "Pontos",
            stops: [
              { name: "Baldeação Rio Pinheiro", time: "07h25" },
              { name: "Trevo da Patrolinha", time: "07h30" },
              { name: "Trevo da Guarani", time: "07h30" },
              { name: "Trevo da Capeg", time: "07h50" },
              { name: "Núcleo (30, 31, 32)", time: "08h00" },
            ]
          }
        ]
      },
      {
        id: "clevelandia-mariopolis",
        title: "Clevelândia/Mariópolis – Granjas",
        badge: "D&A Transportes",
        meta: "Início 07h30 • Saída 16h30 • rota intermunicipal.",
        sections: [
          { name: "Pontos",
            stops: [
              { name: "Mercado Economia (Clevelândia)", time: "06h15" },
              { name: "Igrejinha dos Remédios (Clevelândia)", time: "06h15" },
              { name: "Soledade – Mercado Canoinhas (Clevelândia)", time: "06h20" },
              { name: "Rodoviária de Clevelândia", time: "06h25" },
              { name: "Faculdade Fesc (Clevelândia)", time: "06h25" },
              { name: "Beto Lanches (Clevelândia)", time: "06h25" },
              { name: "Sivieiro (Clevelândia)", time: "06h30" },
              { name: "Rodoviária (Mariópolis)", time: "06h55" },
              { name: "Granobom (Mariópolis)", time: "07h00" },
              { name: "Moinho D. Hilda (Mariópolis)", time: "07h00" },
              { name: "Baldeação Rio Pinheiro", time: "07h25" },
              { name: "Núcleo Recanto (N15, 16, 17)", time: "07h40" },
            ]
          }
        ]
      },
      {
        id: "martarello",
        title: "Rota Martarello – Incubatório + Núcleo 40",
        badge: "Martarello",
        meta: "Inicia em Vitorino • passa no Incubatório • finaliza no N40.",
        sections: [
          { name: "Pontos",
            note: "A rota desembarca no Incubatório e segue conforme a operação interna.",
            stops: [
              { name: "Cartório (Vitorino)", time: "06h35" },
              { name: "Banco do Brasil (Vitorino)", time: "06h35" },
              { name: "Incubatório", time: "07h00", address: "Avícola Pato Branco – Pato Branco/PR" },
              { name: "Loja Dez", time: "07h15" },
              { name: "Núcleo 40", time: "07h40" },
            ]
          }
        ]
      },
    ];