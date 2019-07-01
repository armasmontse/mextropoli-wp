<?php

get_header();

if (have_posts()) : while (have_posts()) : the_post(); ?>

	<!-- P a g e -->
	<div class="page-template">
		<div class="grid__container">
			<div class="page-template__contenedor">
				<div class="flex-center">
					<h2 class="page-template__titulo"><?php echo the_title(); ?></h2>
				</div>
		
				<div class="page-template__contenido">
					<div class="page-template__contenido--contenedor">
						<?php the_content(); ?> 
					</div>
				</div>
			</div>
		</div>
	</div>

<?php endwhile; endif;

get_footer();
