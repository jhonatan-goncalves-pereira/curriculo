# Site do Jhonatan — como atualizar

Portfólio pessoal (Next.js 16 com export estático) publicado em https://jhonatan-goncalves-pereira.github.io/curriculo/.
Responda em português do Brasil. O site é bilíngue: todo texto existe em PT e em EN.

## Onde mexer

| Quero mudar | Arquivo |
|---|---|
| Textos, experiências, projetos, formação, contato | `src/content/pt.ts` **e** `src/content/en.ts` (sempre os dois, mesma estrutura) |
| Formato desses dados | `src/content/types.ts` |
| E-mail, WhatsApp, GitHub, LinkedIn | `src/lib/site.ts` |
| Ilustração de um card de projeto | `src/components/sections/ProjectVisual.tsx` (uma por `ProjectId`) |
| Currículo em PDF | `cv/pt.html` e `cv/en.html`; `npm run cv` gera os PDFs em `public/` |

- A seção **Produtos** (`products` em pt.ts/en.ts, componente `src/components/sections/Products.tsx`) mostra os sistemas no ar com print da página inicial. Os prints ficam em `src/assets/products/` (JPEG 1440×900, tirados com o Edge headless) e são escolhidos por `ProductId`.
- O primeiro item de `projects.items` vira o card grande, em destaque.
- O botão "Baixar CV" usa `meta.cv` de cada idioma: quem vê o site em inglês baixa o CV em inglês.

## Regras de conteúdo

- Só fatos verdadeiros e verificáveis. Número sem fonte não entra.
- **Diploma:** o bacharelado está em andamento, na reta final (falta a defesa do TCC). Não escrever "bacharel" nem ano de conclusão até a defesa acontecer.
- **Propriedade intelectual:** nada de código nem telas com dados pessoais. Sistemas institucionais entram com descrição, números públicos dos relatórios e, se estiverem abertos ao público, link e print da página pública (como o SESAU Digital e o CMS Digital). Não usar logotipo de terceiro como marca própria, e nada do FIT ou de empresa parceira do PNAAT.
- **Residência PNAAT (estudo de caso do OEE, `caseStudy` em pt.ts/en.ts e `CaseStudy.tsx`):** sem nome nem logo da fábrica até haver autorização; nada de domínio, IP, nome de servidor ou de rede, link de repositório, nome de funcionário ou de cliente, número de remessa, volume ou preço. Nenhum print com dados reais: a tela do tablet é uma ilustração com números fictícios. O termo de bolsa pede que a divulgação passe antes pelo FIT.
- **Coerência:** site, CV em PT e CV em EN dizem a mesma coisa. Mudou experiência ou projeto no site? Atualize `cv/*.html` e rode `npm run cv`.
- O inglês da versão EN é para recrutador estrangeiro: frases curtas, naturais e sem tradução literal.

## Antes de publicar

```bash
npm run lint
npm run build   # checa tipos e gera out/
npm run cv      # só se o currículo mudou (precisa do Edge ou do Chrome)
```

## Publicar

- Deploy automático: todo push na `main` dispara `.github/workflows/deploy.yml` (GitHub Actions → GitHub Pages).
- Trabalhe numa branch, abra PR e faça merge na `main` só com o OK do Jhonatan.
- Acompanhe com `gh run watch` e confira o site no ar depois do deploy.
