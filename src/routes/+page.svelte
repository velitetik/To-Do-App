<script lang="ts">
	
	export let data;

	let task: {};
	let form: HTMLFormElement;
	let sortedTasks = data.tasks.sort((a,b)=> a.id - b.id)

	function handleClick(ID: any) {
		form = document.getElementById("form-"+ID) as HTMLFormElement
		form.submit();
  }

  
  </script>
  
  <main>
	<h1 class="mt-4 mb-4">Aufgabenmanagement-App</h1>
  
	<form class="d-flex justify-content-between mb-4" action="?/create" method="POST">
		<label for="taskTitle" class="form-label">Aufgabe:</label>
	  <div class="textarea mb-3">
		<textarea class="form-control" name="title" bind:value={task} aria-label="With textarea" required></textarea>
	  </div>
	  <div class="mb-3">
		<button type="submit" class="btn btn-primary">Speichern</button>
	 </div>
	</form>
  
	{#if sortedTasks.length > 0}
	  <ul class="list-group">
		{#each sortedTasks as task, index}
		  <li class="list-group-item d-flex justify-content-between align-items-center">
			<form class="form-check" id="form-{task.id}"  action="?/update" method="post">
				<input class="form-check-input mt-2" type="checkbox" bind:value={task.status} checked={task.status} name="status" on:change|preventDefault={() => handleClick(task.id)}>
				<label class="form-check-label"  for="flexCheckDefault">
					<span class:checked={task.status}>{task.title}</span>
				</label>
				<input type="text" style="display: none;" name="title" value={task.title}>
				<input type="text" style="display: none;" name="id" value={task.id}>
			</form>
			<form action="?/delete&id={task.id}" method="POST">
				<button type="submit" class="btn btn-danger">Löschen</button>
			</form>
		  </li>
		{/each}
	  </ul>
	{:else}
	  <p>Keine Aufgaben verfügbar.</p>
	{/if}
  </main>
  
  <style lang="scss">
	main {
	  max-width: 600px;
	  margin: auto;
	}

	.textarea {
		min-width: 70%;
	}

	.checked {
        text-decoration: line-through;
    }

  </style>
 