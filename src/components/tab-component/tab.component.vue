 <template>
    <div v-if="active" class="tab-component">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'tab-component',
    props: {
        title: String
    },
    data() {
        return {
            active: false
        }
    },
    mounted() {

    }
}
</script>
