 <template>
    <div v-if="active" class="zk-tab-item">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'zk-tab-item',
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