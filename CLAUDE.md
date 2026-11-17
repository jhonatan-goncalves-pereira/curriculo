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

- O primeiro item de `projects.items` vira o card grande, em destaque.
- O botão "Baixar CV" usa `meta.cv` de cada idioma: quem vê o site em inglês baixa o CV em inglês.

## Regras de conteúdo

- Só fatos verdadeiros e verificáveis. Número sem fonte não entra.
- **Diploma:** o bacharelado está em andamento, na reta final (falta a defesa do TCC). Não escrever "bacharel" nem ano de conclusão até a defesa acontecer.
- **Propriedade intelectual:** nada de código, telas com dados ou logotipos de terceiros (URCA, SESAU, FIT, empresas parceiras). Sistemas institucionais entram só com descrição e números públicos dos relatórios.
- **Residência PNAAT:** o termo de bolsa exige que divulgação sobre a residência passe antes pelo FIT. Não detalhar o trabalho feito na indústria parceira.
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
