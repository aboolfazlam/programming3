<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            
            <li class="nav-item">
              <RouterLink :to="{name:'Home'}" class="nav-link">Home</RouterLink>

            </li>
            <li class="nav-item">
                <RouterLink :to="{name:'indexUser'}" class="nav-link">Users</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink :to="{name:'indexPost'}" class="nav-link">Posts</RouterLink>

            </li>
           
            
          </ul>
          
        </div>
      </div>
    </nav>
  </header>
</template>