# Next.js'i Anlayalım

## 🧠 Rendering Nedir?

**Rendering**, bir siteye girdiğimizde, o sitenin görsel ve yapısal öğelerinin (HTML, CSS, JS vb.) tarayıcımıza (browser) yerleştirilmesi işlemidir.

---

## ⚙️ Next.js Rendering Türleri

Next.js iki temel rendering yöntemini destekler:

- **Server Side Rendering (SSR)**
- **Client Side Rendering (CSR)**

---

## 🔄 Server Side Rendering (SSR)

Server Side Rendering (Sunucu Taraflı Render), kullanıcının tarayıcısına ulaşmadan önce, sayfanın sunucuda oluşturulup son haliyle istemciye (client) gönderilmesi sürecidir.

**Özetle:**

1. Kullanıcı siteye istek gönderir.
2. Sunucu, JavaScript dosyalarını işler.
3. HTML çıktısı oluşturulur.
4. Bu HTML çıktısı kullanıcıya gönderilir.

**Avantajları:**

- İlk yüklemede daha hızlı içerik sunumu (SEO için iyi).
- Tarayıcıda daha az işlem yapılır.

---

## 🌐 Client Side Rendering (CSR)

Client Side Rendering (İstemci Taraflı Render), sayfanın tarayıcıda (kullanıcının bilgisayarında) render edilmesi işlemidir.

**Özetle:**

1. Kullanıcı siteye istek gönderir.
2. Sunucudan JavaScript dosyaları indirilir.
3. Tarayıcı bu dosyaları çalıştırarak sayfayı oluşturur.

**Avantajları:**

- Sayfalar arası geçişlerde daha hızlı deneyim.
- Dinamik ve etkileşimli uygulamalarda esneklik.

---

## 📌 Karşılaştırma

| Özellik                 | SSR (Server Side)     | CSR (Client Side)   |
| ----------------------- | --------------------- | ------------------- |
| İlk Yükleme Hızı        | Genellikle daha hızlı | Daha yavaş olabilir |
| SEO Uyumluluğu          | Yüksek                | Düşük               |
| Tarayıcıdaki Yük        | Az                    | Fazla               |
| Etkileşimli Uygulamalar | Daha az esnek         | Daha esnek          |

---

## 📘 Not

Next.js, sadece SSR ve CSR ile sınırlı değildir. Aynı zamanda **Static Site Generation (SSG)** ve **Incremental Static Regeneration (ISR)** gibi gelişmiş render yöntemlerini de destekler.

---

> **Kısaca:** SSR'de işlem sunucuda, CSR'de ise istemcide gerçekleşir. Hangi yöntemin kullanılacağı, projenin ihtiyaçlarına göre belirlenmelidir.
