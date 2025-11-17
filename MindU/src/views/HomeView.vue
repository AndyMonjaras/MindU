<template>
  <div>
    <!-- ✅ NAVBAR -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div class="container">
        <a class="navbar-brand fw-bold text-primary" href="#">MindU</a>

        <!-- Botón para responsive -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Enlaces -->
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <router-link class="nav-link active" to="/">Inicio</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">Nosotros</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">Contacto</router-link>
            </li>
          </ul>

          <!-- Dropdown de usuario -->
          <div class="dropdown">
            <button
              class="btn btn-outline-primary dropdown-toggle"
              type="button"
              id="userMenu"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              👤 Perfil
            </button>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="userMenu">
              <li>
                <router-link class="dropdown-item" to="/profile">Ver perfil</router-link>
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <button class="dropdown-item text-danger" @click="logout">
                  Cerrar sesión
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero text-center text-white">
      <h1 class="display-4 fw-bold">Bienvenido a MindU</h1>
      <p class="lead">Tu espacio personal para mejorar tu bienestar mental y emocional.</p>
      <button class="btn btn-light btn-lg mt-3">Comenzar ahora</button>
    </section>

    <!-- Estadísticas -->
    <section class="container my-5">
      <div class="row text-center">
        <div class="col-md-4" v-for="(item, index) in stats" :key="index">
          <div class="p-4 stat-card bg-white">
            <h2>{{ item.valor }}</h2>
            <p>{{ item.texto }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Funcionalidades -->
    <section class="container my-5">
      <h2 class="text-center mb-4">¿Qué puedes hacer en MindU?</h2>
      <div class="row">
        <div class="col-md-4" v-for="(item, index) in features" :key="index">
          <div class="card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">{{ item.icon }} {{ item.titulo }}</h5>
              <p>{{ item.descripcion }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Coming Soon -->
    <section class="coming-soon text-center">
      <h2>Próximamente en MindU</h2>
      <p>Estamos trabajando para ofrecerte más herramientas increíbles:</p>
      <ul class="list-unstyled">
        <li v-for="(item, index) in comingSoon" :key="index">{{ item }}</li>
      </ul>
    </section>
  </div>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";

export default {
  name: "HomeView",
  data() {
    return {
      stats: [
        { valor: "85%", texto: "Usuarios se sienten mejor después de 7 días" },
        { valor: "+120", texto: "Ejercicios de relajación y journaling" },
        { valor: "24/7", texto: "Acceso a tus registros y progreso" },
      ],
      features: [
        { icon: "📝", titulo: "Diario emocional", descripcion: "Registra cómo te sientes cada día." },
        { icon: "🌬️", titulo: "Ejercicios de respiración", descripcion: "Reduce la ansiedad con respiración consciente." },
        { icon: "📊", titulo: "Seguimiento del estado de ánimo", descripcion: "Visualiza tus emociones a lo largo del tiempo." },
      ],
      comingSoon: [
        "🎧 Audios de meditación guiada",
        "🤝 Contactos de especialistas certificados",
        "📆 Planes personalizados de bienestar",
      ],
    };
  },
  methods: {
    async logout() {
      const auth = getAuth();
      try {
        await signOut(auth);
        this.$router.push("/login");
      } catch (error) {
        console.error("Error al cerrar sesión:", error);
      }
    },
  },
};
</script>

<style scoped>
.hero {
  background: linear-gradient(135deg, #8EC5FC 0%, #E0C3FC 100%);
  padding: 100px 20px;
}
.stat-card {
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
.coming-soon {
  background-color: #f8f9fa;
  padding: 60px 20px;
  border-top: 1px solid #ddd;
}
</style>
