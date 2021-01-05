<template>
    <div class="gameboard__container" id="board">
        <table>
            <tr v-for="r in rows">
                <td class="cell" v-for="c in cols" v-bind:id="'row' + r + 'col' + c"><span><img v-bind:class="'piece ' + 'row' + r + 'col' + c" alt="" src="" /></span></td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'StrategoField',

        data: function() {
            return {
                cols: [0,1,2,3,4,5,6,7,8,9],
                rows: [0,1,2,3,4,5,6,7,8,9]
            };
        }
    }
</script>
