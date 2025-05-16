 
# 📄 Random Resume API

A simple Node.js + Vercel Serverless Function that returns a **random resume** in JSON format on every request. Perfect for developers building frontend portfolio pages, mock interview tools, or resume template generators. ⚡


---

## 🚀 Live API

</br>

👉 [Click to Try It](https://resume-api-xi.vercel.app/api/resume)

</br>

Each request returns one random resume like this:

```json
{
  "id": "ivan-ivanov",
  "name": "Ivan Ivanov",
  "title": "Full Stack Developer",
  "location": "Kyiv, Ukraine",
  ...
}
````

---


</br>

## 🔧 How It Works

This API randomly picks one resume from a pre-defined list of 15+ detailed candidate profiles and returns it as a response.

✅ CORS-enabled
✅ GET-only
✅ Hosted via [Vercel](https://vercel.com)

---


</br>

## 🛠 Installation & Run Locally

Clone the repo:

```bash
git clone https://github.com/Antot-12/Portfolio_API_Vercel.git
cd Portfolio_API_Vercel
```



Install Vercel CLI if needed:

```bash
npm install -g vercel
```

Run locally:

```bash
vercel dev
```

Deploy it to Vercel:

```bash
vercel --prod
```

---


</br>

## 🧠 Use Case Ideas

* Frontend `About Me` sections
* Dynamic resume preview widgets
* Portfolio template generators
* Developer CV randomizer
* AI resume reviewers

---


</br>

## 📎 Example Use in React

```tsx
useEffect(() => {
  fetch('https://your-vercel-url/api/resume')
    .then(res => res.json())
    .then(data => setResume(data));
}, []);
```

---

 

</br>

## 🤝 Credits

Built with ❤️ using:

* Node.js
* Vercel Serverless Functions
* Pure JSON

</br>

Created by **Antot_12**

 
 
